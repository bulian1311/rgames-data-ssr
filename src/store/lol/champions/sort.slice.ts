import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
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

const selectState = (state: RootState) => state.lolChampionSort;

export const selectSortValue = createSelector(
  selectState,
  (state) => state.value
);

export const selectSortAsc = createSelector(selectState, (state) => state.asc);

export const lolChampionSortReducer = sortSlice.reducer;
