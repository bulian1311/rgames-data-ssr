import { useQuery } from '@tanstack/react-query';
import { fetchItemsMap } from '@services';

export const useItemsMapQuery = () => {
  const query = useQuery(['itemsMap'], fetchItemsMap);

  return query;
};
