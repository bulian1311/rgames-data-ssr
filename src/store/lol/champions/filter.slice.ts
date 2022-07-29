import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../store";

export type TFilterState = {
  value: string;
};

const initialState: TFilterState = {
  value: "",
};

export const filterSlice = createSlice({
  name: "lol/champions/display",
  initialState,
  reducers: {
    setFilterValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setFilterValue } = filterSlice.actions;

export const selectFilterValue = (state: RootState) =>
  state.lolChampionFilter.value;

export const lolChampionFilterReducer = filterSlice.reducer;
