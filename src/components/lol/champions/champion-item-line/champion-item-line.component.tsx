import React from 'react';
import { Link } from 'react-router-dom';
import { Props } from './champion-item-line.props';

export const ChampionItemLine = ({
  champion,
  ...props
}: Props): JSX.Element => {
  return (
    <div {...props}>
      <Link to={`/lol/champion/${champion.id}`}>
        <img
          className="hover:scale-110"
          src={`http://ddragon.leagueoflegends.com/cdn/img/champion/tiles/${champion.image}`}
          width={80}
          height={80}
        />
      </Link>
    </div>
  );
};
