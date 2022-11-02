import type { NextPage, GetStaticProps } from 'next';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { LolLayout, Items } from '@components';
import { fetchItems, fetchItemsTree } from '@services';

const ItemsPage: NextPage = () => {
  return (
    <LolLayout>
      <Items />
    </LolLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['items'], fetchItems);
  await queryClient.prefetchQuery(['itemsTree'], fetchItemsTree);

  return {
    props: { dehydratedState: dehydrate(queryClient) },
  };
};

export default ItemsPage;
