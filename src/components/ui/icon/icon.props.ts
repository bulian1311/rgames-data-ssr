import { HTMLAttributes } from 'react';
import { TIcon } from '@types';

export type Props = HTMLAttributes<HTMLElement> & {
  type: TIcon;
  size?: 'sm' | 'normal' | 'lg';
};
