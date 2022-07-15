import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../../store";

export type TDisplayValue = "lines" | "th" | "th-large";

export type TDisplayState = {
  value: TDisplayValue;
};

const initialState: TDisplayState = {
  value: "th",
};

export const displaySlice = createSlice({
  name: "lol/champions/display",
  initialState,
  reducers: {
    setDisplayValue: (state, action: PayloadAction<TDisplayValue>) => {
      state.value = action.payload;
    },
  },
});

export const { setDisplayValue } = displaySlice.actions;

export const selectDisplayValue = (state: RootState) =>
  state.lolChampionDisplay.value;

export const lolChampionDisplayReducer = displaySlice.reducer;
