import { HTMLAttributes } from 'react';

export type Props = HTMLAttributes<HTMLDivElement> & {
  searchValue: string;
  handleChange: (value: string) => void;
};
