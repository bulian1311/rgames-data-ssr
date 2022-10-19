import type { NextPage, GetStaticProps } from 'next';
import { Champions, LolLayout } from '@components';
import { fetctChampions } from '@services';
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
  const champions = await fetctChampions();

  return {
    props: { champions },
  };
};

export default ChampionsPage;
