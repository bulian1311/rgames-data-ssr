import type { NextPage } from "next";
import { Block, Headline, Sidebar, LolLayout } from "@components";
import { TLolChampionShort } from "@types";

type TProps = {
  champions: TLolChampionShort[];
};

const LolPage: NextPage<TProps> = ({ champions }) => {
  return (
    <LolLayout>
      <Headline tag="h2">Новости</Headline>
    </LolLayout>
  );
};

export default LolPage;
