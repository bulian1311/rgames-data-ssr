import React, { useState } from 'react';
import clsx from 'clsx';
import { useAppDispatch, useAppSelector } from '@hooks';
import { setItemsFilterTag, selectItemsFilterTags } from '@store';
import { TTagMatching, tagMatching } from '@types';
import { Props } from './tag.props';

export const ItemTag = ({ tag, ...props }: Props): JSX.Element => {
  //const [active, setActive] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const itemTags = useAppSelector(selectItemsFilterTags);
  const matchTag: TTagMatching = tag as TTagMatching;

  const handleClick = () => {
    //setActive(!active);
    dispatch(setItemsFilterTag(tag));
  };

  return (
    <span
      onClick={handleClick}
      className={clsx('text-sm   leading-3 cursor-pointer block px-2 py-1', {
        'text-slate-400 hover:text-slate-200': !itemTags.includes(tag),
        'bg-purple-900 text-slate-200': itemTags.includes(tag),
      })}
      {...props}
    >
      {tagMatching[matchTag]}
    </span>
  );
};
