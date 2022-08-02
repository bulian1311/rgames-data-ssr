import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import {
  lolDisplayReducer,
  lolChampionFilterReducer,
  lolChampionSortReducer,
  lolItemsFilterReducer,
} from "./lol";

export function makeStore() {
  return configureStore({
    reducer: {
      lolDisplay: lolDisplayReducer,
      lolChampionFilter: lolChampionFilterReducer,
      lolChampionSort: lolChampionSortReducer,
      lolItemsFilter: lolItemsFilterReducer,
    },
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
