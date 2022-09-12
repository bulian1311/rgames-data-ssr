import React from 'react';
import Link from 'next/link';
import { useAppSelector } from '@hooks';
import { selectItemById } from '@store';
import { ItemModal } from '../../item-modal';
import { Props } from './item-into.props';

export const ItemInto = ({ itemId, ...props }: Props): JSX.Element => {
  const item = useAppSelector(selectItemById(itemId));
  return (
    <ItemModal itemId={itemId}>
      <Link href={`/lol/item/${itemId}`}>
        <a>
          <img
            src={`http://ddragon.leagueoflegends.com/cdn/12.11.1/img/item/${item.image.full}`}
            alt={item.name}
          />
        </a>
      </Link>
    </ItemModal>
  );
};
