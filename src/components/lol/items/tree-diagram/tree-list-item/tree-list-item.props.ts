import { HTMLAttributes } from 'react';

export type Props = HTMLAttributes<HTMLLIElement> & {
  itemId: string;
  index: number;
  length: number;
};
