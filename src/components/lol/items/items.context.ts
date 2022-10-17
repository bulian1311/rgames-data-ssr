import { createContext, Dispatch } from 'react';
import { TState, TItemsAction } from './items.reducer';

export const ItemsContext = createContext<{
  state: TState;
  dispatch: Dispatch<TItemsAction>;
}>({
  state: {
    searchQery: '',
    activeTags: [],
  },
  dispatch: () => {},
});

export const ItemsProvider = ItemsContext.Provider;
