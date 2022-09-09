import React, { useState } from 'react';
import { Props } from './navbar.props';
import { Link } from 'react-router-dom';
import { NavbarLinks } from './navbar-links';
import { Button, Icon } from '@components';

export const Navbar = ({ ...props }: Props): JSX.Element => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav
      className="bg-slate-900 flex items-center font-medium justify-between px-8 fixed w-full z-10"
      {...props}
    >
      <Icon
        onClick={() => setIsNavOpen(!isNavOpen)}
        type={isNavOpen ? 'remove' : 'lines'}
        className="z-50 md:hidden"
      />

      <Link to="/" className="block z-50 text-slate-200">
        <span>Logo</span>
      </Link>
      <NavbarLinks isOpen={isNavOpen} />
      <div className="z-50 my-2 md:my-0">
        <Button name="Войти" />
      </div>
    </nav>
  );
};
