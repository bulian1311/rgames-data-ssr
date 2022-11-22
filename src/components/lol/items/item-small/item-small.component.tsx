import React from 'react';
import Link from 'next/link';
import { itemImageUrl } from '@services';
import { Props } from './item-small.props';
import { ItemModal } from '../item-modal';

export const ItemSmall = ({ item, ...props }: Props): JSX.Element => {
  return (
    <ItemModal itemId={item.id}>
      <Link href={`/lol/item/${item.id}`}>
        <a>
          <img
            className="rounded-md hover:scale-110"
            width={66}
            height={66}
            src={itemImageUrl(item.image)}
          />
        </a>
      </Link>
    </ItemModal>
  );
};
