import { useContext } from 'react';
import { ChampionsContext } from '../components/lol/champions/champions.context';

export const useChampionsFilters = () => useContext(ChampionsContext);
