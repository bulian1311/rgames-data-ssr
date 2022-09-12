import React from 'react';
import Link from 'next/link';
import { Props } from './champion-item-large.props';

export const ChampionItemLarge = ({
  champion,
  ...props
}: Props): JSX.Element => {
  return (
    <div {...props}>
      <Link href={`/lol/champion/${champion.id}`}>
        <a>
          <img
            className="hover:scale-110"
            src={`http://ddragon.leagueoflegends.com/cdn/img/champion/tiles/${champion.image}`}
            width={150}
            height={150}
          />
        </a>
      </Link>
    </div>
  );
};
