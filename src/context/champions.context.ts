import { createContext } from 'react';
import { TLolChampion } from '@types';

export const ChampionsContext = createContext<TLolChampion[]>([]);

export const ChampionsProvider = ChampionsContext.Provider;
