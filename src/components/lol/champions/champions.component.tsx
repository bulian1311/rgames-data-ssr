import React, { useState } from 'react';
import clsx from 'clsx';
import { useChampions } from '@hooks';
import { Display } from '@components';
import { TDisplayValue, TLolChampion } from '@types';
import { ChampionItemSmall } from './champion-item-small';
import { ChampionItemLarge } from './champion-item-large';
import { ChampionItemLine } from './champion-item-line';
import { ChampionFilter } from './filter';
import { Sort } from './sort';
import { Props } from './champions.props';

export const Champions = ({ ...props }: Props): JSX.Element => {
  const champions = useChampions();
  const [renderChampions, setRenderChampions] =
    useState<TLolChampion[]>(champions);
  const [displayValue, setDisplayValue] = useState<TDisplayValue>('cell');

  let ChampionItem = ChampionItemSmall;

  switch (displayValue) {
    case 'lines':
      ChampionItem = ChampionItemLine;
      break;
    case 'table':
      ChampionItem = ChampionItemSmall;
      break;
    case 'cell':
      ChampionItem = ChampionItemLarge;
      break;
  }

  const renderChampionItems = () => {
    return renderChampions.map((champ) => (
      <ChampionItem key={champ.key} champion={champ} />
    ));
  };

  return (
    <>
      <ChampionFilter setRenderChampions={setRenderChampions} />
      <div className="flex items-center justify-between">
        <Sort
          renderChampions={renderChampions}
          setRenderChampions={setRenderChampions}
        />
        <Display
          displayValue={displayValue}
          setDisplayValue={setDisplayValue}
        />
      </div>
      <div
        className={clsx('flex flex-wrap gap-2 justify-center', {
          'flex-col': displayValue === 'lines',
        })}
        {...props}
      >
        {renderChampionItems()}
      </div>
    </>
  );
};
