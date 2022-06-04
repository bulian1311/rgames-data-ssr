import React from "react";
import { Props } from "./navbar.props";
import Link from "next/link";
import { NavLinks } from "../../molecules";
import { Button, Icon } from "../../atoms";

export const Navbar = ({ ...props }: Props): JSX.Element => {
  return (
    <nav
      className="bg-slate-900 flex items-center font-medium justify-between px-8 py-4"
      {...props}
    >
      <Icon type="lines" className="z-50 md:hidden" />

      <Link href="/">
        <a className="block z-50">
          <span>Logo</span>
        </a>
      </Link>
      <NavLinks />
      <div>
        <Button name="Войти" />
      </div>
    </nav>
  );
};
