import { HTMLAttributes } from 'react';

export type Props = HTMLAttributes<HTMLElement> & {
  name: string;
  to: string;
};
