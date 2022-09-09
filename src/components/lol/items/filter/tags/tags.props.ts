import { HTMLAttributes } from 'react';
import { TResLolItemTree } from '@types';

export type Props = HTMLAttributes<HTMLDivElement> & {
  tree: TResLolItemTree;
};
