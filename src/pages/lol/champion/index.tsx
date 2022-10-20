import type { NextPage, GetStaticProps } from 'next';
import { Champions, LolLayout } from '@components';
import { fetchChampions } from '@services';
import { TLolChampion } from '@types';

type TProps = {
  champions: TLolChampion[];
};

const ChampionsPage: NextPage<TProps> = ({ champions }) => {
  return (
    <LolLayout>
      <Champions champions={champions} />
    </LolLayout>
  );
};

export const getStaticProps: GetStaticProps<TProps> = async () => {
  const champions = await fetchChampions();

  return {
    props: { champions },
  };
};

export default ChampionsPage;
