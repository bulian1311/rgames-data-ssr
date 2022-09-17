import React from 'react';
import { useAppSelector, useAppDispatch } from '@hooks';
import { TDisplayValue } from '@types';
import { DisplayButton } from './display-button';
import { Props } from './display.props';

export const Display = ({
  displayValue,
  setDisplayValue,
  ...props
}: Props): JSX.Element => {
  const handleClick = (value: TDisplayValue) => {
    setDisplayValue(value);
  };

  return (
    <div className="flex items-center" {...props}>
      <span className="uppercase mr-2">отображение:</span>
      <DisplayButton
        icon="lines"
        onClick={() => handleClick('lines')}
        active={displayValue === 'lines'}
      />
      <DisplayButton
        icon="cell"
        onClick={() => handleClick('cell')}
        active={displayValue === 'cell'}
      />
      <DisplayButton
        icon="table"
        onClick={() => handleClick('table')}
        active={displayValue === 'table'}
      />
    </div>
  );
};
