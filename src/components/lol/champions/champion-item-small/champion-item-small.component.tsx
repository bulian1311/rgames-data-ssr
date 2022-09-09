import React from 'react';
import { Link } from 'react-router-dom';
import { Props } from './champion-item-small.props';

export const ChampionItemSmall = ({
  champion,
  ...props
}: Props): JSX.Element => {
  return (
    <div className="hover:scale-110 basis-24" {...props}>
      <Link to={`/lol/champion/${champion.id}`}>
        <img
          src={`http://ddragon.leagueoflegends.com/cdn/img/champion/tiles/${champion.image}`}
          width={96}
          height={96}
        />
      </Link>
    </div>
  );
};
