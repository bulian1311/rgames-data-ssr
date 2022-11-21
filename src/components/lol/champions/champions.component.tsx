import React, { useState, useReducer, useMemo } from 'react';
import clsx from 'clsx';
import { Display } from '@components';
import { TDisplayValue } from '@types';
import { useChampionsQuery } from '@hooks';
import { ChampionItemSmall } from './champion-item-small';
import { ChampionItemLarge } from './champion-item-large';
import { ChampionItemLine } from './champion-item-line';
import { ChampionFilter } from './filter';
import { Sort } from './sort';
import { ChampionsReducer } from './champions.reducer';
import { ChampionsProvider } from './champions.context';
import { filterChampions } from './champions.helpers';
import { Props } from './champions.props';

export const Champions = ({ ...props }: Props): JSX.Element => {
  const { champions, isChampionsLoading, isChampionsSuccess } =
    useChampionsQuery();
  const [displayValue, setDisplayValue] = useState<TDisplayValue>('cell');
  const [state, dispatch] = useReducer(ChampionsReducer, {
    searchQery: '',
    sortValue: 'name',
    sortAsc: true,
  });

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

  const renderChampions = () => {
    if (!isChampionsSuccess || !champions) return;

    const filteredChampions = useMemo(
      () => filterChampions(champions, state),
      [state]
    );

    return filteredChampions.map((champ) => (
      <ChampionItem key={champ.key} champion={champ} />
    ));
  };

  if (isChampionsLoading) {
    return <span>Loading</span>;
  }

  return (
    <ChampionsProvider value={{ state, dispatch }}>
      <ChampionFilter />
      <div className="flex items-center justify-between">
        <Sort />
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
        {renderChampions()}
      </div>
    </ChampionsProvider>
  );
};
