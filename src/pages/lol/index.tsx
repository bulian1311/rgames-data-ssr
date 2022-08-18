import type { NextPage } from "next";
import { Headline, LolLayout } from "@components";

const LolPage: NextPage = () => {
  return (
    <LolLayout>
      <Headline tag="h2">Новости</Headline>
    </LolLayout>
  );
};

export default LolPage;
