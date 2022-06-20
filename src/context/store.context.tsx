import React, { ReactNode } from "react";
import { RootStore, RootStoreHydration } from "../store";

let store: RootStore;

function initializeStore(initialData?: RootStoreHydration): RootStore {
  const _store = store ?? new RootStore();

  // if there is data call the root store hydration method
  if (initialData) {
    _store.hydrate(initialData);
  }
  // For server side rendering always create a new store
  if (typeof window === "undefined") return _store;

  // Create the store once in the client
  if (!store) store = _store;

  return _store;
}

export const StoreContext = React.createContext(initializeStore());

export function RootStoreProvider({
  children,
  hydrationData,
}: {
  children: ReactNode;
  hydrationData?: RootStoreHydration;
}) {
  // pass the hydration data to the initialization function
  const store = initializeStore(hydrationData);

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}
