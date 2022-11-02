import type { NextPage, GetStaticProps } from 'next';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { Champions, LolLayout } from '@components';
import { fetchChampions } from '@services';
import { TLolChampion } from '@types';

const ChampionsPage: NextPage = () => {
  return (
    <LolLayout>
      <Champions />
    </LolLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['champions'], fetchChampions);

  return {
    props: { dehydratedState: dehydrate(queryClient) },
  };
};

export default ChampionsPage;
