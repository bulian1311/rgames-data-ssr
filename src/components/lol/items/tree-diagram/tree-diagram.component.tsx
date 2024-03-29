import React from 'react';
import { useItemsMapQuery } from '@hooks';
import { TreeList } from './tree-list';
import { Props } from './tree-diagram.props';

export const TreeDiagram = ({ itemId, ...props }: Props): JSX.Element => {
  const { itemsMap, isItemsMapLoading } = useItemsMapQuery();

  if (!itemsMap || isItemsMapLoading) return <div>Loading...</div>;

  const item = itemsMap[itemId];

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
