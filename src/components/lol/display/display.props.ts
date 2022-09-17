import { HTMLAttributes, Dispatch, SetStateAction } from 'react';
import { TDisplayValue } from '@types';

export type Props = HTMLAttributes<HTMLDivElement> & {
  displayValue: TDisplayValue;
  setDisplayValue: Dispatch<SetStateAction<TDisplayValue>>;
};
