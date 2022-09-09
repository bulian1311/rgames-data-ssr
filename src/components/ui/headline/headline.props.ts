import { HTMLAttributes, ReactNode } from 'react';

export type Props = HTMLAttributes<HTMLElement> & {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  children: ReactNode;
};
