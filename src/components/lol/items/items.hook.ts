import { useContext } from 'react';
import { ItemsContext } from './items.context';

export const useItems = () => useContext(ItemsContext);
