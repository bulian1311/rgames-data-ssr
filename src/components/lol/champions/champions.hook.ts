import { useContext } from 'react';
import { ChampionsContext } from './champions.context';

export const useChampions = () => useContext(ChampionsContext);
