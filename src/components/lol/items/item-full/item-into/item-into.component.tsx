import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '@hooks';
import { selectItemById } from '@store';
import { ItemModal } from '../../item-modal';
import { Props } from './item-into.props';

export const ItemInto = ({ itemId, ...props }: Props): JSX.Element => {
  const item = useAppSelector(selectItemById(itemId));
  return (
    <ItemModal itemId={itemId}>
      <Link to={`/lol/item/${itemId}`}>
        <img
          src={`http://ddragon.leagueoflegends.com/cdn/12.11.1/img/item/${item.image.full}`}
          alt={item.name}
        />
      </Link>
    </ItemModal>
  );
};
