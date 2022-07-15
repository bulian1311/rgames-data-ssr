import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import {
  lolChampionSortReducer,
  lolChampionDisplayReducer,
  lolChampionFilterReducer,
} from "../components/lol";

export function makeStore() {
  return configureStore({
    reducer: {
      lolChampionSort: lolChampionSortReducer,
      lolChampionDisplay: lolChampionDisplayReducer,
      lolChampionFilter: lolChampionFilterReducer,
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
