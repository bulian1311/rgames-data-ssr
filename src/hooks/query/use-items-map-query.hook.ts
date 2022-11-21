import { useQuery } from '@tanstack/react-query';
import { fetchItemsMap } from '@services';

export const useItemsMapQuery = () => {
  const { data, isLoading, isSuccess } = useQuery(['itemsMap'], fetchItemsMap);

  return {
    itemsMap: data,
    isItemsMapLoading: isLoading,
    isItemsMapSuccess: isSuccess,
  };
};
