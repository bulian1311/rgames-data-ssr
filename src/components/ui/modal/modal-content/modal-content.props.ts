import { HTMLAttributes, ReactNode } from 'react';

export type Props = HTMLAttributes<HTMLDivElement> & {
  content: ReactNode;
};
