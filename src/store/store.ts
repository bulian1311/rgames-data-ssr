import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { lolDisplayReducer } from "./lol";

export function makeStore() {
  return configureStore({
    reducer: {
      lolDisplay: lolDisplayReducer,
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
