import { useQuery } from '@tanstack/react-query';
import { fetchItems } from '@services';

export const useItemsQuery = () => {
  const query = useQuery(['items'], fetchItems);

  return query;
};
