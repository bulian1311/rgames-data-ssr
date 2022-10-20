import { TResLolChampionFull } from '@types';
import { HTMLAttributes } from 'react';

export type Props = HTMLAttributes<HTMLDivElement> & {
  champion: TResLolChampionFull;
};
