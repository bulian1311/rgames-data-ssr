import { HTMLAttributes } from 'react';

export type Props = HTMLAttributes<HTMLUListElement> & {
  from: string[];
};
