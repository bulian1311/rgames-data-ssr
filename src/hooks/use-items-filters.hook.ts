import { useContext } from 'react';
import { ItemsContext } from '../components/lol/items/items.context';

export const useItemsFilters = () => useContext(ItemsContext);
