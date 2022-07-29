import type { GetStaticProps, NextPage } from "next";
import { lolDataService } from "@services";
import { Champions, LolLayout } from "@components";
import { TLolChampionShort } from "@types";

type TProps = {
  champions: TLolChampionShort[];
};

const ChampionsPage: NextPage<TProps> = ({ champions }) => {
  return (
    <LolLayout>
      <Champions champions={champions} />
    </LolLayout>
  );
};

export const getStaticProps: GetStaticProps<TProps> = async () => {
  const champions = await lolDataService.fetctChampions();

  return {
    props: { champions },
  };
};

export default ChampionsPage;
