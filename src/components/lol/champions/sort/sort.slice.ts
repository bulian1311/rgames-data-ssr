import { createSlice } from "@reduxjs/toolkit";

type TState = {
  value: "name";
  status: "asc" | "desc";
};

const initialState: TState = {
  value: "name",
  status: "asc",
};

export const sortSlice = createSlice({
  name: "lol/champions/sort",
  initialState,
  reducers: {
    nameAsc: (state) => {
      state.value = "name";
      state.status = "asc";
    },
    nameDesc: (state) => {
      state.value = "name";
      state.status = "desc";
    },
  },
});

export const { nameAsc, nameDesc } = sortSlice.actions;

export const selectValue = (state: TState) => state.value;
export const selectStatus = (state: TState) => state.status;

export const sortReducer = sortSlice.reducer;
