import { createContext, Dispatch } from 'react';
import { TLolChampion } from '@types';

export const ChampionsContext = createContext<TLolChampion[]>([]);
