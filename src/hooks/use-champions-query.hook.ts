import { useQuery } from '@tanstack/react-query';
import { fetchChampionsMap } from '@services';

export const useChampionsQuery = () => {
  const query = useQuery(['championsMap'], fetchChampionsMap);

  return query;
};
