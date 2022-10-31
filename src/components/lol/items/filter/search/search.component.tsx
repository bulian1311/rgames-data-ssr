import React, { FormEvent } from 'react';
import { Input } from '@components';
import { useItemsFilter } from '../../items.hook';
import { Props } from './search.props';

export const ItemsSearch = ({ ...props }: Props): JSX.Element => {
  const { dispatch, state } = useItemsFilter();

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;

    dispatch({ type: 'search', payload: value });
  };

  const onClear = () => {
    dispatch({ type: 'search', payload: '' });
  };

  return (
    <div className="flex gap-4 items-center" {...props}>
      <span>Найти:</span>
      <Input
        icon="search"
        onChange={handleChange}
        onClear={onClear}
        value={state.searchQery}
      />
    </div>
  );
};
