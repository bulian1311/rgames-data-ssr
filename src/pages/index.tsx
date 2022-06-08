import type { NextPage } from "next";
import { Block, Headline } from "../components/ui";

const Home: NextPage = () => {
  return (
    <>
      <Block>
        <Headline tag="h2">Home Page</Headline>
      </Block>
    </>
  );
};

export default Home;
