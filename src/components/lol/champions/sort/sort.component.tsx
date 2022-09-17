import React, { useState } from 'react';
import { SortButton } from './sort-button';
import { Props, TSortValue } from './sort.props';

export const Sort = ({
  renderChampions,
  setRenderChampions,
  ...props
}: Props): JSX.Element => {
  const [sortAsc, setSortAsc] = useState<boolean>(true);
  const [sortValue, setSortValue] = useState<TSortValue>('name');

  const handleClick = (value: TSortValue) => {
    let sortedChampions = renderChampions;

    if (sortValue === 'name') {
      sortedChampions = renderChampions.slice().reverse();
      setSortAsc(!sortAsc);
    }

    setSortValue(value);
    setRenderChampions(sortedChampions);
  };

  return (
    <div className="flex items-center gap-1 text-slate-400" {...props}>
      <span className="mr-2 text-slate-200">Сортировать:</span>
      <SortButton
        name="Имя"
        sortAsc={sortAsc}
        onClick={() => handleClick('name')}
        active={sortValue === 'name'}
      />
      <SortButton
        name="Бан%"
        sortAsc={sortAsc}
        onClick={() => handleClick('ban')}
        active={sortValue === 'ban'}
      />
    </div>
  );
};
