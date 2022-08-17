import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@store";
import { lolDataService } from "@services";
import { TResLolItem, TResLolItemTree, ValidationErrors } from "@types";

export const fetchLolItems = createAsyncThunk(
  "lol/fetchItems",
  async (_, { rejectWithValue }) => {
    try {
      const items = await lolDataService.fetchItems();
      return items;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export type TItemsState = {
  items: { [id: string]: TResLolItem };
  tree: TResLolItemTree[];
  status: "resolve" | "reject" | "pending" | null;
  errors: string[];
};

const initialState: TItemsState = {
  items: {},
  tree: [],
  status: null,
  errors: [],
};

export const itemsSlice = createSlice({
  name: "lol/items",
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<{ [id: string]: TResLolItem }>) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLolItems.pending, (state) => {
      state.status = "pending";
    });

    builder.addCase(fetchLolItems.fulfilled, (state, { payload }) => {
      state.status = "resolve";
      state.items = payload.data;
      state.tree = payload.tree;
    });

    builder.addCase(fetchLolItems.rejected, (state, { payload }) => {
      state.status = "reject";
      const error = payload as ValidationErrors;
      state.errors.push(error.errorMessage);
    });
  },
});

export const { setItems } = itemsSlice.actions;

export const selectItems = (state: RootState) => {
  const items: TResLolItem[] = Object.values(state.lolItems.items);

  const data: TResLolItem[] = items.filter((item) => {
    const exclude =
      item.name !== "Золотая лопатка" &&
      item.name !== "Награда за строение" &&
      item.name !== "Заглушка для Гангпланка" &&
      !item.name.includes("500 серебряных змей");

    return exclude;
  });

  return data;
};

export const selectItemsTree = (state: RootState) => state.lolItems.tree;

export const lolItemsReducer = itemsSlice.reducer;
