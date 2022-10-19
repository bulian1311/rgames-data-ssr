import { HTMLAttributes } from 'react';
import { TLolItemTree } from '@types';

export type Props = HTMLAttributes<HTMLDivElement> & {
  tree: TLolItemTree;
};
