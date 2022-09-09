import React from 'react';
import { Link } from 'react-router-dom';
import { Props } from './sub-link.props';

export const SubLink = ({ sublink, ...props }: Props): JSX.Element => {
  return (
    <li
      className="py-4 px-6 inline-block w-full hover:bg-slate-900"
      key={sublink.name}
      {...props}
    >
      <Link to={sublink.to}>{sublink.name}</Link>
    </li>
  );
};
