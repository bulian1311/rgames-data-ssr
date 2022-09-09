import React from 'react';
import { useAppSelector, useAppDispatch } from '@hooks';
import {
  selectSortValue,
  selectSortAsc,
  setSortValue,
  setSortAsc,
  TSortValue,
} from '@store';
import { SortButton } from './sort-button';
import { Props } from './sort.props';

export const Sort = ({ ...props }: Props): JSX.Element => {
  const dispatch = useAppDispatch();
  const activeFilter = useAppSelector(selectSortValue);
  const asc = useAppSelector(selectSortAsc);

  const handleClick = (value: TSortValue) => {
    value !== activeFilter && dispatch(setSortValue(value));
    value !== activeFilter && dispatch(setSortAsc(true));

    value === activeFilter && dispatch(setSortAsc(!asc));
  };

  return (
    <div className="flex items-center gap-1 text-slate-400" {...props}>
      <span className="mr-2 text-slate-200">Сортировать:</span>
      <SortButton
        name="Имя"
        onClick={() => handleClick('name')}
        active={activeFilter === 'name'}
      />
      <SortButton
        name="Бан%"
        onClick={() => handleClick('ban')}
        active={activeFilter === 'ban'}
      />
    </div>
  );
};
