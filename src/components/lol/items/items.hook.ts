import { useContext } from 'react';
import { ItemsContext } from './items.context';

export const useItemsFilter = () => useContext(ItemsContext);
