import { HTMLAttributes } from 'react';

export type Props = HTMLAttributes<HTMLButtonElement> & {
  name: string;
  active: boolean;
  sortAsc: boolean;
};
