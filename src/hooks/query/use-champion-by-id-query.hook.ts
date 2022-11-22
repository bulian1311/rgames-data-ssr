import { useQuery } from '@tanstack/react-query';
import { fetchChampionById } from '@services';

export const useChampionsQuery = (id: string) => {
  const { data, isLoading, isSuccess } = useQuery(['champions'], () =>
    fetchChampionById(id)
  );

  return {
    champion: data,
    isChampionLoading: isLoading,
    isChampionSuccess: isSuccess,
  };
};
