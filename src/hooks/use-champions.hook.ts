import { useContext } from 'react';
import { ChampionsContext } from '@context';

export const useChampions = () => useContext(ChampionsContext);
