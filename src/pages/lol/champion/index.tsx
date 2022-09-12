import type { NextPage } from 'next';
import { Champions, LolLayout } from '@components';

const ChampionsPage: NextPage = () => {
  return (
    <LolLayout>
      <Champions />
    </LolLayout>
  );
};

// export const getStaticProps: GetStaticProps<TProps> = async () => {
//   const champions = await lolDataService.fetctChampions();

//   return {
//     props: { champions },
//   };
// };

export default ChampionsPage;
