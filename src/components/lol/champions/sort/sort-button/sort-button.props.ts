import { HTMLAttributes } from 'react';
import { TSortValue } from '../../champions.reducer';

export type Props = HTMLAttributes<HTMLButtonElement> & {
  name: string;
  type: TSortValue;
};
