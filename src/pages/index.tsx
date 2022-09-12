import type { NextPage } from 'next';
import { Block, Headline, Input } from '@components';

const HomePage: NextPage = () => {
  return (
    <>
      <Block>
        <Headline tag="h2">Home Page</Headline>
        <Input icon="search" onClear={() => {}} />
      </Block>
    </>
  );
};

export default HomePage;
