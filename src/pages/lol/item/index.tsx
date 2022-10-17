import type { NextPage, GetStaticProps } from 'next';
import { LolLayout, Items } from '@components';
import { fetchItems, fetchItemsTree } from '@services';
import { TLolItem, TLolItemTree } from '@types';

type TProps = {
  items: TLolItem[];
  tree: TLolItemTree[];
};

const ItemsPage: NextPage<TProps> = ({ items, tree }) => {
  return (
    <LolLayout>
      <Items items={items} tree={tree} />
    </LolLayout>
  );
};

export const getStaticProps: GetStaticProps<TProps> = async () => {
  const items = await fetchItems();
  const tree = await fetchItemsTree();

  return {
    props: { items, tree },
  };
};

export default ItemsPage;
