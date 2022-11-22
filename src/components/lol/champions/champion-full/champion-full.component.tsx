import React from 'react';
import Image from 'next/image';
import { Headline, Block } from '@components';
import {
  championImageUrl,
  championImagePassiveUrl,
  championImageSpellUrl,
} from '@services';

import { Props } from './champion-full.props';

export const ChampionFull = ({ champion, ...props }: Props): JSX.Element => {
  return (
    <div className="flex gap-4">
      <Block className="flex flex-col">
        <div className="flex gap-4">
          <Image
            src={championImageUrl(champion.image.full)}
            width={120}
            height={120}
          />
          <div className="flex flex-col justify-between">
            <Headline>{`${champion.id} (${champion.name})`}</Headline>
            <div className="flex gap-1">
              <Image
                src={championImagePassiveUrl(champion.passive.image.full)}
                width={50}
                height={50}
              />
              {champion.spells.map((spell) => (
                <Image
                  key={spell.id}
                  src={championImageSpellUrl(spell.image.full)}
                  width={50}
                  height={50}
                />
              ))}
            </div>
          </div>
        </div>
      </Block>
    </div>
  );
};
