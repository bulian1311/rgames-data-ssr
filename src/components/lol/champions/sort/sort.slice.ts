import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../../store";

export type TFilterValue = "name" | "ban";

export type TState = {
  value: TFilterValue;
  asc: boolean;
};

const initialState: TState = {
  value: "name",
  asc: true,
};

export const sortSlice = createSlice({
  name: "lol/champions/sort",
  initialState,
  reducers: {
    setAsc: (state, action: PayloadAction<boolean>) => {
      state.asc = action.payload;
    },
    setValue: (state, action: PayloadAction<TFilterValue>) => {
      state.value = action.payload;
    },
  },
});

export const { setAsc, setValue } = sortSlice.actions;

export const selectValue = (state: RootState) => state.lolChampionSort.value;
export const selectAsc = (state: RootState) => state.lolChampionSort.asc;

export const lolChampionSortReducer = sortSlice.reducer;
