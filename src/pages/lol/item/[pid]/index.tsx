import type { NextPage } from 'next';
import { Headline, LolLayout } from '@components';
import { TLolItem } from '@types';

type TProps = {
  item: TLolItem;
};

const ItemPage: NextPage<TProps> = ({ item }) => {
  return (
    <LolLayout>
      <Headline>Item</Headline>
    </LolLayout>
  );
};

export default ItemPage;
