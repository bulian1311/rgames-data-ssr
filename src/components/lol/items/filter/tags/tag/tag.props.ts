import { HTMLAttributes } from 'react';

export type Props = HTMLAttributes<HTMLSpanElement> & {
  tag: string;
};
