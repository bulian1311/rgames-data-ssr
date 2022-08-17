import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@store";
import { lolDataService } from "@services";
import { TResLolChampionShort, ValidationErrors } from "@types";

export const fetchLolChampions = createAsyncThunk(
  "lol/fetchChampions",
  async (_, { rejectWithValue }) => {
    try {
      const champions = await lolDataService.fetctChampions();
      return champions;
    } catch (err) {
      return rejectWithValue(err as ValidationErrors);
    }
  }
);

export type TChampionsState = {
  champions: { [id: string]: TResLolChampionShort };
  status: "resolve" | "reject" | "pending" | null;
  errors: string[];
};

const initialState: TChampionsState = {
  champions: {},
  status: null,
  errors: [],
};

export const championsSlice = createSlice({
  name: "lol/champions",
  initialState,
  reducers: {
    setChampions: (
      state,
      action: PayloadAction<{ [id: string]: TResLolChampionShort }>
    ) => {
      state.champions = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLolChampions.pending, (state) => {
      state.status = "pending";
    });

    builder.addCase(fetchLolChampions.fulfilled, (state, { payload }) => {
      state.status = "resolve";
      state.champions = payload;
    });

    builder.addCase(fetchLolChampions.rejected, (state, { payload }) => {
      state.status = "reject";
      const error = payload as ValidationErrors;
      state.errors.push(error.errorMessage);
    });
  },
});

export const { setChampions } = championsSlice.actions;

export const selectChampions = (state: RootState) =>
  state.lolChampions.champions;

export const lolChampionsReducer = championsSlice.reducer;
