import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@store";

export type TItemsFilterState = {
  search: string;
  tags: string[];
};

const initialState: TItemsFilterState = {
  search: "",
  tags: [],
};

export const itemsFilterSlice = createSlice({
  name: "lol/items/filter",
  initialState,
  reducers: {
    setItemsFilterSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { setItemsFilterSearch } = itemsFilterSlice.actions;

export const selectItemsFilterSearch = (state: RootState) =>
  state.lolItemsFilter.search;

export const lolItemsFilterReducer = itemsFilterSlice.reducer;
