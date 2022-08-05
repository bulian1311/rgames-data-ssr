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
    setItemsFilterTag: (state, { payload }: PayloadAction<string>) => {
      const existTag = state.tags.includes(payload);

      if (!existTag) {
        state.tags.push(payload);
      } else {
        const filteredTags = state.tags.filter((tag) => tag !== payload);
        return { ...state, tags: filteredTags };
      }
    },
  },
});

export const { setItemsFilterSearch, setItemsFilterTag } =
  itemsFilterSlice.actions;

export const selectItemsFilterSearch = (state: RootState) =>
  state.lolItemsFilter.search;

export const lolItemsFilterReducer = itemsFilterSlice.reducer;
