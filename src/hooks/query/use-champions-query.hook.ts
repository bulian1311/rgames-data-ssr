import { useQuery } from '@tanstack/react-query';
import { fetchChampions } from '@services';

export const useChampionsQuery = () => {
  const query = useQuery(['champions'], fetchChampions);

  return query;
};
