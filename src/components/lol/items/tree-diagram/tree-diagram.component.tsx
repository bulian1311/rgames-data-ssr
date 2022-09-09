import React from 'react';
import { useAppSelector } from '@hooks';
import { selectItemById } from '@store';
import { TreeList } from './tree-list';
import { Props } from './tree-diagram.props';

export const TreeDiagram = ({ itemId, ...props }: Props): JSX.Element => {
  const item = useAppSelector(selectItemById(itemId));

  if (!item) return <div>Loading...</div>;

  return (
    <div className="flex justify-center">
      <div className="text-center">
        <div className="flex flex-col justify-center items-center">
          <div className="w-16">
            <img
              className="block rounded-md m-auto shadow-md"
              alt={item.name}
              src={`http://ddragon.leagueoflegends.com/cdn/12.11.1/img/item/${item.image.full}`}
            />
          </div>
          <div className="text-gray-600"></div>
        </div>

        {item.from && <TreeList from={item.from} />}
      </div>
    </div>
  );
};
