import type {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from 'next';
import { ChampionFull } from '@components';
import { fetchChampions, fetchChampionById } from '@services';
import { TResLolChampionFull } from '@types';

type TProps = {
  champion: TResLolChampionFull;
};

const ChampionPage: NextPage<TProps> = ({ champion }) => {
  return <ChampionFull champion={champion} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const champions = await fetchChampions();

  const paths = champions.map((champ) => ({
    params: { pid: champ.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<TProps> = async ({
  params,
}: GetStaticPropsContext) => {
  if (!params) return { notFound: true };

  const champion = await fetchChampionById(params.pid as string);

  if (!champion) return { notFound: true };

  return {
    props: { champion },
  };
};

export default ChampionPage;
