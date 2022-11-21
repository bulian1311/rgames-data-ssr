import { useQuery } from '@tanstack/react-query';
import { fetchChampionsMap } from '@services';

export const useChampionsMapQuery = () => {
  const { data, isLoading, isSuccess } = useQuery(
    ['championsMap'],
    fetchChampionsMap
  );

  return {
    championsMap: data,
    isChampionsMapLoading: isLoading,
    isChampionsMapSuccess: isSuccess,
  };
};
