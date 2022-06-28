import type { NextPage } from "next";
import { Block, Sidebar, Headline } from "../../../components";

type TProps = {
  items: any[];
};

const RunesPage: NextPage<TProps> = ({ items }) => {
  return (
    <div className="flex space-x-8">
      <Sidebar />
      <Block className="grow flex">
        <Headline>Runes</Headline>
      </Block>
    </div>
  );
};

export default RunesPage;
