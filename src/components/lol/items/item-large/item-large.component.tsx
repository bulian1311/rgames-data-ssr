import React from 'react';
import Link from 'next/link';
import { itemImageUrl } from '@services';
import { ItemModal } from '../item-modal';
import { Props } from './item-large.props';

export const ItemLarge = ({ item }: Props): JSX.Element => {
  return (
    <ItemModal itemId={item.id}>
      <Link href={`/lol/item/${item.id}`}>
        <a>
          <div className="flex flex-col items-center gap-2 p-2 bg-slate-800 hover:bg-slate-700 rounded-md">
            <img
              className="rounded-md"
              width={80}
              height={80}
              src={itemImageUrl(item.image)}
            />
          </div>
        </a>
      </Link>
    </ItemModal>
  );
};
