import type { NextPage, GetStaticProps } from "next";
import { LolLayout, Items } from "@components";
import { lolDataService } from "@services";

type TProps = {
  items: any[];
};

const ItemsPage: NextPage<TProps> = ({ items }) => {
  return (
    <LolLayout>
      <Items items={items} />
    </LolLayout>
  );
};

export const getStaticProps: GetStaticProps<TProps> = async () => {
  const items = await lolDataService.fetchItems();

  return {
    props: { items },
  };
};

export default ItemsPage;
