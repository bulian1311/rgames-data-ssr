import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@store';
import { lolDataService } from '@services';
import { TResLolChampionFull, ValidationErrors } from '@types';

export const fetchChampionById = createAsyncThunk(
  'lol/fetchChampionById',
  async (id: string, { rejectWithValue }) => {
    try {
      const champion = lolDataService.fetchChampion(id);
      return champion;
    } catch (err) {
      return rejectWithValue(err as ValidationErrors);
    }
  }
);

export type TChampionState = {
  champion: TResLolChampionFull | null;
  status: 'resolve' | 'reject' | 'pending' | null;
  errors: string[];
};

const initialState: TChampionState = {
  champion: null,
  status: null,
  errors: [],
};

export const championSlice = createSlice({
  name: 'lol/champions/champion',
  initialState,
  reducers: {
    setChampion: (state, action: PayloadAction<TResLolChampionFull>) => {
      state.champion = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchChampionById.pending, (state) => {
      state.status = 'pending';
    });

    builder.addCase(fetchChampionById.fulfilled, (state, { payload }) => {
      state.status = 'resolve';
      state.champion = payload;
    });

    builder.addCase(fetchChampionById.rejected, (state, { payload }) => {
      state.status = 'reject';
      const error = payload as ValidationErrors;

      state.errors.push(error.errorMessage);
    });
  },
});

export const { setChampion } = championSlice.actions;

export const selectChampion = (state: RootState) => state.lolChampion.champion;

export const selectChampionStatus = (state: RootState) =>
  state.lolChampion.status;

export const lolChampionReducer = championSlice.reducer;
