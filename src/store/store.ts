import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { lolChampionSortReducer } from "../components/lol/champions/sort";

export function makeStore() {
  return configureStore({
    reducer: { lolChampionSort: lolChampionSortReducer },
    devTools: true,
  });
}

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
