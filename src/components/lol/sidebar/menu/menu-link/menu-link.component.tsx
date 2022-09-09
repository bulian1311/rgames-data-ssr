import React from 'react';
import { NavLink } from 'react-router-dom';
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
      to={to}
      {...props}
      className={({ isActive }) =>
        clsx('p-4 hover:bg-slate-800 rounded-md text-slate-200', {
          'bg-slate-800': isActive,
        })
      }
    >
      {name}
    </NavLink>
  );
};
