import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import { sortReducer } from "../components/lol/champions/sort";

export function makeStore() {
  return configureStore({
    reducer: { sort: sortReducer },
    devTools: true,
  });
}

export const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;
