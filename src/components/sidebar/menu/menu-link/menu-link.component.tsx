import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";
import { Props } from "./menu-link.props";

export const MenuLink = ({
  to,
  name,
  className,
  ...props
}: Props): JSX.Element => {
  const { asPath } = useRouter();

  return (
    <Link href={to} {...props}>
      <a
        className={clsx("p-4 hover:bg-slate-800 rounded-md", {
          "bg-slate-800": to === asPath,
        })}
      >
        {name}
      </a>
    </Link>
  );
};
