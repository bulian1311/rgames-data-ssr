import type { NextPage } from "next";
import { Headline, LolLayout } from "@components";

type TProps = {
  items: any[];
};

const RunesPage: NextPage<TProps> = ({ items }) => {
  return (
    <LolLayout>
      <Headline>Runes</Headline>
    </LolLayout>
  );
};

export default RunesPage;
