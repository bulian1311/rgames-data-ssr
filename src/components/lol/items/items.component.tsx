import React, { useState, useReducer, useMemo } from 'react';
import clsx from 'clsx';
import { Display } from '@components';
import { TDisplayValue } from '@types';
import { useItemsQuery } from '@hooks';
import { ItemsFilter } from './filter';
import { ItemLine } from './item-line';
import { ItemLarge } from './item-large';
import { ItemSmall } from './item-small';
import { itemsReducer } from './items.reducer';
import { ItemsProvider } from './items.context';
import { filterItems } from './items.helpers';
import { Props } from './items.props';

export const Items = ({ ...props }: Props): JSX.Element => {
  const [state, dispatch] = useReducer(itemsReducer, {
    searchQery: '',
    activeTags: [],
  });

  const { items, isItemsLoading, isItemsSuccess } = useItemsQuery();

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

  const renderItems = () => {
    if (!isItemsSuccess || !items) return;

    let filteredItems = useMemo(() => filterItems(items, state), [state]);

    return filteredItems.map((item) => <Item key={item.id} item={item} />);
  };

  if (isItemsLoading) {
    return <span>'Loading'</span>;
  }

  return (
    <ItemsProvider value={{ state, dispatch }}>
      <ItemsFilter />
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
        {renderItems()}
      </div>
    </ItemsProvider>
  );
};
