import React, { useState, useReducer } from 'react';
import clsx from 'clsx';
import { Display } from '@components';
import { TDisplayValue } from '@types';
import { ItemsFilter } from './filter';
import { ItemLine } from './item-line';
import { ItemLarge } from './item-large';
import { ItemSmall } from './item-small';
import { itemsReducer } from './items.reducer';
import { ItemsProvider } from './items.context';
import { Props } from './items.props';

export const Items = ({ items, tree, ...props }: Props): JSX.Element => {
  const [state, dispatch] = useReducer(itemsReducer, {
    searchQery: '',
    activeTags: [],
  });
  const [displayValue, setDisplayValue] = useState<TDisplayValue>('cell');

  let Item: ({ item }: any) => JSX.Element = ItemLarge;

  switch (displayValue) {
    case 'lines':
      Item = ItemLine;
      break;
    case 'cell':
      Item = ItemLarge;
      break;
    case 'table':
      Item = ItemSmall;
      break;
  }

  const renderItemItems = () => {
    let filteredItems = items;

    if (state.searchQery) {
      filteredItems = filteredItems.filter((item) => {
        const itemRu = item.name
          .toLocaleLowerCase()
          .includes(state.searchQery.toLocaleLowerCase());

        const itemEn = item.colloq
          .toLocaleLowerCase()
          .includes(state.searchQery.toLocaleLowerCase());

        return itemRu || itemEn;
      });
    }

    if (state.activeTags.length > 0) {
      filteredItems = filteredItems.filter((item) => {
        let includeTag = state.activeTags.every((tag) =>
          item.tags.includes(tag)
        );

        return includeTag;
      });
    }

    return filteredItems.map((item) => <Item key={item.id} item={item} />);
  };

  return (
    <ItemsProvider value={{ state, dispatch }}>
      <ItemsFilter tree={tree} />
      <div className="flex items-center justify-end">
        <Display
          displayValue={displayValue}
          setDisplayValue={setDisplayValue}
        />
      </div>
      {displayValue === 'lines' && (
        <div className="flex justify-between items-center">
          <span>Предмет</span>
          <span>Цена</span>
        </div>
      )}
      <div
        className={clsx('flex gap-2', {
          'flex-col': displayValue === 'lines',
          'flex-wrap': displayValue !== 'lines',
        })}
        {...props}
      >
        {renderItemItems()}
      </div>
    </ItemsProvider>
  );
};
