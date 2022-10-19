import React from 'react';
import clsx from 'clsx';
import { TTagMatching, tagMatching } from '@types';
import { useItems } from '../../../items.hook';
import { Props } from './tag.props';

export const ItemTag = ({ tag, ...props }: Props): JSX.Element => {
  const { state, dispatch } = useItems();
  const { activeTags } = state;
  const matchTag: TTagMatching = tag as TTagMatching;

  const handleClick = () => {
    dispatch({ type: 'filter', payload: tag });
  };

  return (
    <span
      onClick={handleClick}
      className={clsx('text-sm leading-3 cursor-pointer block px-2 py-1', {
        'text-slate-400 hover:text-slate-200': activeTags.includes(tag),
        'bg-purple-900 text-slate-200': activeTags.includes(tag),
      })}
      {...props}
    >
      {tagMatching[matchTag]}
    </span>
  );
};
