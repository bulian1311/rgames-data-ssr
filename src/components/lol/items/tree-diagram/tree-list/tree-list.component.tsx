import React from 'react';
import { TreeListItem } from '../tree-list-item';
import { Props } from './tree-list.props';

export const TreeList = ({ from, ...props }: Props): JSX.Element => {
  return (
    <ul className="flex flex-row mt-10 justify-center" {...props}>
      <div className="-mt-10 border-l-2 absolute h-10 border-gray-400"></div>
      {from.map((itemId, index) => (
        <TreeListItem
          key={itemId + Math.random().toString()}
          itemId={itemId}
          index={index}
          length={from.length}
        />
      ))}
    </ul>
  );
};
