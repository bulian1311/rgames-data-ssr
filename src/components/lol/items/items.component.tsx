import React from 'react';
import clsx from 'clsx';
import { useAppSelector } from '@hooks';
import { selectDisplayValue, selectItems } from '@store';
import { Display } from '@components';
import { ItemsFilter } from './filter';
import { ItemLine } from './item-line';
import { ItemLarge } from './item-large';
import { ItemSmall } from './item-small';
import { Props } from './items.props';

export const Items = ({ ...props }: Props): JSX.Element => {
  const items = useAppSelector(selectItems);
  const displayValue = useAppSelector(selectDisplayValue);

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
    return items.map((item) => <Item key={item.id} item={item} />);
  };

  return (
    <>
      <ItemsFilter />
      <div className="flex items-center justify-end">
        <Display />
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
    </>
  );
};
