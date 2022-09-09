import React, { useState } from 'react';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { Props } from './navbar-link.props';

export const NavbarLink = ({ link, ...props }: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <li onClick={() => setIsOpen(!isOpen)} {...props}>
      <NavLink
        to={link.to}
        className={({ isActive }) =>
          clsx(
            'py-4 px-6 hover:bg-slate-800 inline-block w-full md:w-auto text-slate-200',
            {
              'bg-slate-800': isActive,
            }
          )
        }
      >
        {link.name}
      </NavLink>
    </li>
  );
};
