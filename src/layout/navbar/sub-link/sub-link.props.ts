import { HTMLAttributes } from 'react';
import { TSubLink } from '@types';

export type Props = HTMLAttributes<HTMLElement> & {
  sublink: TSubLink;
};
