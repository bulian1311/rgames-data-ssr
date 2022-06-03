import React from "react";
import { Props } from "./navbar.props";
import Link from "next/link";
import { NavLinks } from "../../molecules";

export const Navbar = ({ ...props }: Props): JSX.Element => {
  return (
    <nav className="bg-slate-800" {...props}>
      <div className="flex items-center font-medium justify-between px-8 py-4">
        <Link href="/">
          <a className="block">
            <span>Logo</span>
          </a>
        </Link>
        <ul>
          <li>
            <Link className="inline-block" href="/">
              Home
            </Link>
            <NavLinks />
          </li>
        </ul>
      </div>
    </nav>
  );
};
