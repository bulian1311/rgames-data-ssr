import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type TDisplayValue = "lines" | "cell" | "table";

export type TDisplayState = {
  value: TDisplayValue;
};

const initialState: TDisplayState = {
  value: "table",
};

export const displaySlice = createSlice({
  name: "lol/display",
  initialState,
  reducers: {
    setDisplayValue: (state, action: PayloadAction<TDisplayValue>) => {
      state.value = action.payload;
    },
  },
});

export const { setDisplayValue } = displaySlice.actions;

export const selectDisplayValue = (state: RootState) => state.lolDisplay.value;

export const lolDisplayReducer = displaySlice.reducer;
