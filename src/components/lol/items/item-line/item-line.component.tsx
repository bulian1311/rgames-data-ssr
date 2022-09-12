import React from 'react';
import Link from 'next/link';
import { TTagMatching, tagMatching } from '@types';
import { ItemModal } from '../item-modal';
import { Props } from './item-line.props';

export const ItemLine = ({ item, ...props }: Props): JSX.Element => {
  const renderTags = () => {
    return item.tags.map((tag) => {
      const matchTag: TTagMatching = tag as TTagMatching;
      if (tag === 'ABILITYHASTE') return;

      return (
        <div key={tag} className="bg-slate-900 px-2 py-1 rounded-md">
          {tagMatching[matchTag]}
        </div>
      );
    });
  };

  return (
    <ItemModal itemId={item.id}>
      <Link href={`/lol/item/${item.id}`}>
        <a>
          <div
            className="flex items-center bg-slate-800 px-1 py-1 rounded-md hover:bg-slate-700"
            {...props}
          >
            <img
              className="rounded-md"
              width={66}
              height={66}
              src={`http://ddragon.leagueoflegends.com/cdn/12.11.1/img/item/${item.image}`}
            />
            <div className="flex flex-col items-start flex-1 ml-4">
              <span className="block">{item.name}</span>
              <div className="flex justify-start items-center flex-wrap gap-2">
                {renderTags()}
              </div>
            </div>
            <span className="block mr-4">{item.gold}</span>
          </div>
        </a>
      </Link>
    </ItemModal>
  );
};
