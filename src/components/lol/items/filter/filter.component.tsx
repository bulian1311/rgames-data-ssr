import React from 'react';
import { useAppSelector } from '@hooks';
import { selectItemsTree } from '@store';
import { ItemsSearch } from './search';
import { ItemsTags } from './tags';
import { Props } from './filter.props';

export const ItemsFilter = ({ ...props }: Props): JSX.Element => {
  const tree = useAppSelector(selectItemsTree);

  const renderTags = () => {
    return tree.map((t) => <ItemsTags key={t.header} tree={t} />);
  };

  return (
    <div className="flex flex-col" {...props}>
      <ItemsSearch />
      <div className="flex gap-2 flex-wrap">{renderTags()}</div>
    </div>
  );
};
