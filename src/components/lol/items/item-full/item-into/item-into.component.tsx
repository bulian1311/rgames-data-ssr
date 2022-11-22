import React from 'react';
import Link from 'next/link';
import { useItemsMapQuery } from '@hooks';
import { itemImageUrl } from '@services';
import { ItemModal } from '../../item-modal';
import { Props } from './item-into.props';

export const ItemInto = ({ itemId, ...props }: Props): JSX.Element => {
  const { itemsMap } = useItemsMapQuery();

  if (!itemsMap) return <div>Loading...</div>;

  const item = itemsMap[itemId];

  return (
    <ItemModal itemId={itemId}>
      <Link href={`/lol/item/${itemId}`}>
        <a>
          <img src={itemImageUrl(item.image.full)} alt={item.name} />
        </a>
      </Link>
    </ItemModal>
  );
};
