import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@store';
import { lolDataService } from '@services';
import {
  TResLolItem,
  TResLolItemTree,
  ValidationErrors,
  TLolItem,
} from '@types';

export const fetchLolItems = createAsyncThunk(
  'lol/fetchItems',
  async (_, { rejectWithValue }) => {
    try {
      const items = await lolDataService.fetchItems();
      return items;
    } catch (err) {
      return rejectWithValue(err as ValidationErrors);
    }
  }
);

export type TItemsState = {
  items: { [id: string]: TResLolItem };
  itemsArray: TLolItem[];
  tree: TResLolItemTree[];
  status: 'resolve' | 'reject' | 'pending' | null;
  errors: string[];
};

const initialState: TItemsState = {
  items: {},
  itemsArray: [],
  tree: [],
  status: null,
  errors: [],
};

export const itemsSlice = createSlice({
  name: 'lol/items',
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<{ [id: string]: TResLolItem }>) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLolItems.pending, (state) => {
      state.status = 'pending';
    });

    builder.addCase(fetchLolItems.fulfilled, (state, { payload }) => {
      state.status = 'resolve';
      state.items = payload.items;
      state.itemsArray = payload.itemsArray;
      state.tree = payload.tree;
    });

    builder.addCase(fetchLolItems.rejected, (state, { payload }) => {
      state.status = 'reject';
      const error = payload as ValidationErrors;
      state.errors.push(error.errorMessage);
    });
  },
});

export const { setItems } = itemsSlice.actions;

export const selectItemsTree = (state: RootState) => state.lolItems.tree;

export const lolItemsReducer = itemsSlice.reducer;
