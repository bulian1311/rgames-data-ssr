import { useQuery } from '@tanstack/react-query';
import { fetchItems } from '@services';

export const useItemsQuery = () => {
  const { data, isLoading, isSuccess } = useQuery(['items'], fetchItems);

  return { items: data, isItemsLoading: isLoading, isItemsSuccess: isSuccess };
};
