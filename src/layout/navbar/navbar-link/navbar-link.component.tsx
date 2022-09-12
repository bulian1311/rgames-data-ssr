import React, { useState } from 'react';
import clsx from 'clsx';
import { NavLink } from '@components';
import { Props } from './navbar-link.props';

export const NavbarLink = ({ link, ...props }: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <li onClick={() => setIsOpen(!isOpen)} {...props}>
      <NavLink
        href={link.to}
        className="py-4 px-6 hover:bg-slate-800 inline-block w-full md:w-auto text-slate-200"
        activeClassName="bg-slate-800"
        name={link.name}
      />
    </li>
  );
};
