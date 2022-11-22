import React from 'react';
import Link from 'next/link';
import { championImagePreviewUrl } from '@services';
import { Props } from './champion-item-line.props';

export const ChampionItemLine = ({
  champion,
  ...props
}: Props): JSX.Element => {
  return (
    <div {...props}>
      <Link href={`/lol/champion/${champion.id}`}>
        <a>
          <img
            className="hover:scale-110"
            src={championImagePreviewUrl(champion.image)}
            width={80}
            height={80}
          />
        </a>
      </Link>
    </div>
  );
};
