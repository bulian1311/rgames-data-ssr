import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@store";

export type TChampionsFilterState = {
  search: string;
};

const initialState: TChampionsFilterState = {
  search: "",
};

export const championsFilterSlice = createSlice({
  name: "lol/champions/filter",
  initialState,
  reducers: {
    setChampionsFilterSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { setChampionsFilterSearch } = championsFilterSlice.actions;

export const selectChampionsFilterSearch = (state: RootState) =>
  state.lolChampionFilter.search;

export const lolChampionFilterReducer = championsFilterSlice.reducer;
