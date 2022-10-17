import { HTMLAttributes } from 'react';
import { TLolItem, TLolItemTree } from '@types';

export type Props = HTMLAttributes<HTMLDivElement> & {
  items: TLolItem[];
  tree: TLolItemTree[];
};
