import React, { useState, useReducer } from 'react';
import clsx from 'clsx';
import { Display } from '@components';
import { TDisplayValue } from '@types';
import { ChampionItemSmall } from './champion-item-small';
import { ChampionItemLarge } from './champion-item-large';
import { ChampionItemLine } from './champion-item-line';
import { ChampionFilter } from './filter';
import { Sort } from './sort';
import { ChampionsReducer } from './champions.reducer';
import { ChampionsProvider } from './champions.context';
import { Props } from './champions.props';

export const Champions = ({ champions, ...props }: Props): JSX.Element => {
  const [displayValue, setDisplayValue] = useState<TDisplayValue>('cell');
  const [state, dispatch] = useReducer(ChampionsReducer, {
    searchQery: '',
    sortValue: 'name',
    sortAsc: false,
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
    let filteredChampions = champions;

    if (state.searchQery) {
      filteredChampions = champions.filter((champ) => {
        const champRu = champ.name
          .toLocaleLowerCase()
          .includes(state.searchQery.toLocaleLowerCase());

        const champEng = champ.id
          .toLocaleLowerCase()
          .includes(state.searchQery.toLocaleLowerCase());

        return champRu || champEng;
      });
    }

    // if (!asc && value === 'name') {
    //   sortedChampions = champions.slice().reverse();
    // }

    return filteredChampions.map((champ) => (
      <ChampionItem key={champ.key} champion={champ} />
    ));
  };

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
