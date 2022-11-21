import { useQuery } from '@tanstack/react-query';
import { fetchChampions } from '@services';

export const useChampionsQuery = () => {
  const { data, isLoading, isSuccess } = useQuery(
    ['champions'],
    fetchChampions
  );

  return {
    champions: data,
    isChampionsLoading: isLoading,
    isChampionsSuccess: isSuccess,
  };
};
