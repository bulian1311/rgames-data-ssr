import type { NextPage } from "next";
import { Block, Headline, Sidebar } from "../../components";

export const LolPage: NextPage = () => {
  return (
    <div className="flex space-x-8">
      <Sidebar />
      <Block className="grow flex">
        <Headline tag="h2">Чемпионы</Headline>
      </Block>
    </div>
  );
};
