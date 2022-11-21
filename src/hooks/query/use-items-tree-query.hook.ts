import { useQuery } from '@tanstack/react-query';
import { fetchItemsTree } from '@services';

export const useItemsTreeQuery = () => {
  const { data, isLoading, isSuccess } = useQuery(
    ['itemsTree'],
    fetchItemsTree
  );

  return {
    itemsTree: data,
    isItemsTreeLoading: isLoading,
    isItemsTreeSuccess: isSuccess,
  };
};
