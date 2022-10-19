import { createContext, Dispatch } from 'react';
import { TState, TChampionsAction } from './champions.reducer';

export const ChampionsContext = createContext<{
  state: TState;
  dispatch: Dispatch<TChampionsAction>;
}>({
  state: {
    searchQery: '',
    sortValue: 'name',
    sortAsc: false,
  },
  dispatch: () => {},
});

export const ChampionsProvider = ChampionsContext.Provider;
