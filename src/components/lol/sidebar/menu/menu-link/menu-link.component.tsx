import React from 'react';
import { NavLink } from '@components';
import clsx from 'clsx';
import { Props } from './menu-link.props';

export const MenuLink = ({
  to,
  name,
  className,
  ...props
}: Props): JSX.Element => {
  return (
    <NavLink
      href={to}
      className="p-4 hover:bg-slate-800 rounded-md text-slate-200"
      activeClassName="bg-slate-800"
      name={name}
      {...props}
    />
  );
};
