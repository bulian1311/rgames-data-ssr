import { HTMLAttributes, Dispatch, SetStateAction } from 'react';
import { TLolChampion } from '@types';

export type Props = HTMLAttributes<HTMLDivElement> & {
  setRenderChampions: Dispatch<SetStateAction<TLolChampion[]>>;
};
