import React from 'react';
import Link from 'next/link';
import { Props } from './sub-link.props';

export const SubLink = ({ sublink, ...props }: Props): JSX.Element => {
  return (
    <li
      className="py-4 px-6 inline-block w-full hover:bg-slate-900"
      key={sublink.name}
      {...props}
    >
      <Link href={sublink.to}>{sublink.name}</Link>
    </li>
  );
};
