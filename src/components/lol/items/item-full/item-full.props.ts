import { TResLolItem } from '@types';
import { HTMLAttributes } from 'react';

export type Props = HTMLAttributes<HTMLDivElement> & {
  item: TResLolItem;
};
