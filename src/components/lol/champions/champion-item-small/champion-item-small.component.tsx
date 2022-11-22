import React from 'react';
import Link from 'next/link';
import { championImagePreviewUrl } from '@services';
import { Props } from './champion-item-small.props';

export const ChampionItemSmall = ({
  champion,
  ...props
}: Props): JSX.Element => {
  return (
    <div className="hover:scale-110 basis-24" {...props}>
      <Link href={`/lol/champion/${champion.id}`}>
        <a>
          <img
            src={championImagePreviewUrl(champion.image)}
            width={96}
            height={96}
          />
        </a>
      </Link>
    </div>
  );
};
