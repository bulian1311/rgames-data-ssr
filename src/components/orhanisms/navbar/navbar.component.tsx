import React, { useState } from "react";
import { Props } from "./navbar.props";
import Link from "next/link";
import { NavLinks } from "../../molecules";
import { Button, Icon } from "../../atoms";

export const Navbar = ({ ...props }: Props): JSX.Element => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav
      className="bg-slate-900 flex items-center font-medium justify-between px-8 py-4"
      {...props}
    >
      <Icon
        onClick={() => setIsNavOpen(!isNavOpen)}
        type={isNavOpen ? "remove" : "lines"}
        className="z-50 md:hidden"
      />

      <Link href="/">
        <a className="block z-50">
          <span>Logo</span>
        </a>
      </Link>
      <NavLinks isOpen={isNavOpen} />
      <div className="z-50">
        <Button name="Войти" />
      </div>
    </nav>
  );
};
