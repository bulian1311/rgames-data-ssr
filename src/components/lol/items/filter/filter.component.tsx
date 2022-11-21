import React from 'react';
import { useItemsQuery, useItemsTreeQuery } from '@hooks';
import { ItemsSearch } from './search';
import { ItemsTags } from './tags';
import { Props } from './filter.props';

export const ItemsFilter = ({ ...props }: Props): JSX.Element => {
  const { itemsTree, isItemsTreeSuccess, isItemsTreeLoading } =
    useItemsTreeQuery();

  const renderTags = () => {
    if (!itemsTree || !isItemsTreeSuccess) return;

    return itemsTree.map((t) => <ItemsTags key={t.header} tree={t} />);
  };

  if (isItemsTreeLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col" {...props}>
      <ItemsSearch />
      <div className="flex gap-2 flex-wrap">{renderTags()}</div>
    </div>
  );
};
