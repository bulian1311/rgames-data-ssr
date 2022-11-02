import { useQuery } from '@tanstack/react-query';
import { fetchItemsTree } from '@services';

export const useItemsTreeQuery = () => {
  const query = useQuery(['itemsTree'], fetchItemsTree);

  return query;
};
