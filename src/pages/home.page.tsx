import type { NextPage } from "next";
import { Block, Headline } from "../components/ui";

export const HomePage: NextPage = () => {
  return (
    <>
      <Block>
        <Headline tag="h2">Home Page</Headline>
      </Block>
    </>
  );
};
