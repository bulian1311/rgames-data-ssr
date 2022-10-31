import { useQuery } from '@tanstack/react-query';
import { fetchItemsMap } from '@services';

export const useItemsQuery = () => {
  const query = useQuery(['itemsMap'], fetchItemsMap);

  return query;
};
