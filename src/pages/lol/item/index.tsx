import type { NextPage, GetStaticProps } from 'next';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { LolLayout, Items } from '@components';
import { fetchItems, fetchItemsTree, fetchItemsMap } from '@services';
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

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['itemsMap'], fetchItemsMap);

  return {
    props: { items, tree, dehydratedState: dehydrate(queryClient) },
  };
};

export default ItemsPage;
