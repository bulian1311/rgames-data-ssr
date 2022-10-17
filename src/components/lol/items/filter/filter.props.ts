import { TLolItemTree } from '@types';
import { HTMLAttributes } from 'react';

export type Props = HTMLAttributes<HTMLDivElement> & {
  tree: TLolItemTree[];
};
