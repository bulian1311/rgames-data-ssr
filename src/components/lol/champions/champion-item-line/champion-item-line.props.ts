import { HTMLAttributes } from 'react';
import { TLolChampionItem } from '@types';

export type Props = HTMLAttributes<HTMLDivElement> & {
  champion: TLolChampionItem;
};
