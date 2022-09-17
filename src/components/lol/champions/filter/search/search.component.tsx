import React, { FormEvent } from 'react';
import { Input } from '@components';
import { Props } from './search.props';

export const ChampionsSearch = ({
  searchValue,
  handleChange,
  ...props
}: Props): JSX.Element => {
  const onChange = (e: FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    handleChange(value);
  };

  const onClear = () => {
    handleChange('');
  };

  return (
    <div className="flex gap-4 items-center" {...props}>
      <span>По имени: </span>
      <Input
        icon="search"
        onChange={onChange}
        onClear={onClear}
        value={searchValue}
      />
    </div>
  );
};
