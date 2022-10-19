import { HTMLAttributes } from 'react';
import { TLolChampion } from '@types';

export type Props = HTMLAttributes<HTMLDivElement> & {
  champions: TLolChampion[];
};
