import { HTMLAttributes, Dispatch, SetStateAction } from 'react';
import { TLolChampion } from '@types';

export type TSortValue = 'name' | 'ban';

export type Props = HTMLAttributes<HTMLDivElement> & {
  renderChampions: TLolChampion[];
  setRenderChampions: Dispatch<SetStateAction<TLolChampion[]>>;
};
