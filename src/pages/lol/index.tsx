import type { NextPage } from "next";
import { Block, Headline, Sidebar } from "@components";
import { TLolChampionShort } from "@types";

type TProps = {
  champions: TLolChampionShort[];
};

const LolPage: NextPage<TProps> = ({ champions }) => {
  return (
    <div className="flex space-x-8">
      <Sidebar />
      <Block className="grow flex">
        <Headline tag="h2">Новости</Headline>
      </Block>
    </div>
  );
};

export default LolPage;
