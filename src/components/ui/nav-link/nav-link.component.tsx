import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { Props } from "./nav-link.props";

export const NavLink = ({
  href,
  name,
  className,
  activeClassName,
  ...props
}: Props): JSX.Element => {
  const { asPath } = useRouter();

  return (
    <Link href={href}>
      <a
        className={clsx(className, {
          [activeClassName]: asPath.includes(href),
        })}
        {...props}
      >
        {name}
      </a>
    </Link>
  );
};
