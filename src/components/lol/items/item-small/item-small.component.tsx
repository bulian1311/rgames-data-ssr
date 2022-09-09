import React from 'react';
import { Link } from 'react-router-dom';
import { Props } from './item-small.props';
import { ItemModal } from '../item-modal';

export const ItemSmall = ({ item, ...props }: Props): JSX.Element => {
  return (
    <ItemModal itemId={item.id}>
      <Link to={`/lol/item/${item.id}`}>
        <img
          className="rounded-md hover:scale-110"
          width={66}
          height={66}
          src={`http://ddragon.leagueoflegends.com/cdn/12.11.1/img/item/${item.image}`}
        />
      </Link>
    </ItemModal>
  );
};
