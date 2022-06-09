import React from "react";
import Link from "next/link";
import { Props } from "./menu-link.props";

export const MenuLink = ({
  to,
  name,
  className,
  ...props
}: Props): JSX.Element => {
  return (
    <Link href={to} {...props}>
      <a className="p-4 hover:bg-slate-800 rounded-md">{name}</a>
    </Link>
  );
};
