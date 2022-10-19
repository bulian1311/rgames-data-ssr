import React, { FormEvent } from 'react';
import { Input } from '@components';
import { useChampions } from '../../champions.hook';
import { Props } from './search.props';

export const ChampionsSearch = ({ ...props }: Props): JSX.Element => {
  const { state, dispatch } = useChampions();

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    dispatch({ type: 'search', payload: value });
  };

  const handleClear = () => {
    dispatch({ type: 'search', payload: '' });
  };

  return (
    <div className="flex gap-4 items-center" {...props}>
      <span>По имени: </span>
      <Input
        icon="search"
        onChange={handleChange}
        onClear={handleClear}
        value={state.searchQery}
      />
    </div>
  );
};
