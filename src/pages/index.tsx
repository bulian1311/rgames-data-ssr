import type { NextPage } from "next";
import { Block, Headline, Input } from "../components/ui";

const HomePage: NextPage = () => {
  return (
    <>
      <Block>
        <Headline tag="h2">Home Page</Headline>
        <Input icon="th" />
      </Block>
    </>
  );
};

export default HomePage;
