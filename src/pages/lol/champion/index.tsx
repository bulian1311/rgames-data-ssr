import type { NextPage, GetStaticProps } from 'next';
import { Champions, LolLayout } from '@components';
import { fetctChampions } from '@services';
import { TLolChampion } from '@types';
import { ChampionsContext } from '@context';

type TProps = {
  champions: TLolChampion[];
};

const ChampionsPage: NextPage<TProps> = ({ champions }) => {
  return (
    <LolLayout>
      <ChampionsContext.Provider value={champions}>
        <Champions />
      </ChampionsContext.Provider>
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
