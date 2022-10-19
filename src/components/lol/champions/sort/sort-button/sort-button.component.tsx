import React from 'react';
import clsx from 'clsx';
import { Icon } from '@components';
import { useChampions } from '../../champions.hook';
import { Props } from './sort-button.props';

export const SortButton = ({ name, type, ...props }: Props): JSX.Element => {
  const { state, dispatch } = useChampions();
  const active = state.sortValue === type;

  const handleClick = () => {
    dispatch({ type: 'sort', payload: type });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={clsx(
        'flex items-center gap-2 p-2 uppercase hover:text-slate-200',
        {
          'bg-slate-800 text-slate-200': active,
        }
      )}
      {...props}
    >
      {name}
      {active && (
        <Icon
          className={clsx('', {
            'rotate-180': !state.sortAsc,
          })}
          type="caret-down"
        />
      )}
    </button>
  );
};
