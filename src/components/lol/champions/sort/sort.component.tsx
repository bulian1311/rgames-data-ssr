import React from 'react';
import { SortButton } from './sort-button';
import { Props } from './sort.props';

export const Sort = ({ ...props }: Props): JSX.Element => {
  return (
    <div className="flex items-center gap-1 text-slate-400" {...props}>
      <span className="mr-2 text-slate-200">Сортировать:</span>
      <SortButton name="Имя" type="name" />
      <SortButton name="Бан%" type="ban" />
    </div>
  );
};
