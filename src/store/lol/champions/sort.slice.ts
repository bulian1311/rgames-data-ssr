import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@store";

export type TSortValue = "name" | "ban";

export type TSortState = {
  value: TSortValue;
  asc: boolean;
};

const initialState: TSortState = {
  value: "name",
  asc: true,
};

export const sortSlice = createSlice({
  name: "lol/champions/sort",
  initialState,
  reducers: {
    setSortAsc: (state, action: PayloadAction<boolean>) => {
      state.asc = action.payload;
    },
    setSortValue: (state, action: PayloadAction<TSortValue>) => {
      state.value = action.payload;
    },
  },
});

export const { setSortAsc, setSortValue } = sortSlice.actions;

export const selectSortValue = (state: RootState) =>
  state.lolChampionSort.value;
export const selectSortAsc = (state: RootState) => state.lolChampionSort.asc;

export const lolChampionSortReducer = sortSlice.reducer;
