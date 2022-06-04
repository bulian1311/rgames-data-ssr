import Link from "next/link";
import React from "react";
import { Props } from "./nav-link.props";

export const NavLink = ({ name, ...props }: Props): JSX.Element => {
  return (
    <li>
      <Link href="/">
        <a className="inline-block md:py-0 py-6">{name}</a>
      </Link>
    </li>
  );
};
