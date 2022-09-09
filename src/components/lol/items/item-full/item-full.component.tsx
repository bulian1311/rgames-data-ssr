import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '@hooks';
import { selectItemById } from '@store';
import { Headline } from '@components';
import { ItemInto } from './item-into';
import { TreeDiagram } from '../tree-diagram';
import { Props } from './item-full.props';

export const ItemFull = ({ ...props }: Props): JSX.Element => {
  const params = useParams();
  const item = useAppSelector(selectItemById(params.itemId as string));

  if (!item) return <div>Loading...</div>;

  return (
    <div {...props}>
      <div className="flex items-center justify-between border-slate-400 border-b-2 pb-2">
        <Headline tag="h1">{item.name}</Headline>
        <div className="flex items-center gap-2">
          <span>Цена: {item.gold.total}</span>
          <span>|</span>
          <span>Цена рецепта: {item.gold.base}</span>
          <span>|</span>
          <span>Цена продажи: {item.gold.sell}</span>
        </div>
      </div>

      <div className="flex flex-wrap items-start gap-4 justify-between mt-4">
        <img
          src={`http://ddragon.leagueoflegends.com/cdn/12.11.1/img/item/${item.image.full}`}
          alt={item.name}
        />

        <div className="flex flex-col gap-4 flex-1">
          <div dangerouslySetInnerHTML={{ __html: item.description }} />

          {item.into && (
            <>
              <Headline tag="h3">{item.name} можно собрать в:</Headline>
              <div className="flex items-center justify-start gap-2 flex-wrap">
                {item.into.map((item) => (
                  <ItemInto key={item} itemId={item} />
                ))}
              </div>
            </>
          )}
        </div>

        {item.from && <TreeDiagram itemId={params.itemId as string} />}
      </div>
    </div>
  );
};
