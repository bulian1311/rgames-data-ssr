import type { GetStaticProps, NextPage } from "next";
import { lolDataService } from "../../services";
import { Block, Headline, Sidebar } from "../../components";
import { TLolChampionShort } from "../../types";

type TProps = {
  champions: TLolChampionShort[];
};

const LolPage: NextPage<TProps> = ({ champions }) => {
  return (
    <div className="flex space-x-8">
      <Sidebar />
      <Block className="grow flex">
        <Headline tag="h2">Чемпионы</Headline>
      </Block>
    </div>
  );
};

export const getStaticProps: GetStaticProps<TProps> = async () => {
  const champions = await lolDataService.fetctChampions();

  return {
    props: { champions },
  };
};

export default LolPage;
