import type {
  NextPage,
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
} from 'next';
import { ItemFull, LolLayout } from '@components';
import { TResLolItem } from '@types';
import { fetchItems, fetchItemsMap } from '@services';

type TProps = {
  item: TResLolItem;
};

const ItemPage: NextPage<TProps> = ({ item }) => {
  return (
    <LolLayout>
      <ItemFull item={item} />
    </LolLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const items = await fetchItems();

  const paths = items.map((item) => ({
    params: { pid: item.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<TProps> = async ({
  params,
}: GetStaticPropsContext) => {
  if (!params) return { notFound: true };

  const items = await fetchItemsMap();

  const item = items[params.pid as string];

  if (!item) return { notFound: true };

  return {
    props: { item },
  };
};

export default ItemPage;
