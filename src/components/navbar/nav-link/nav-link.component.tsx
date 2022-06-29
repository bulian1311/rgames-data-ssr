import React, { useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { Props } from "./nav-link.props";

export const NavLink = ({ link, ...props }: Props): JSX.Element => {
  const { asPath } = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <li onClick={() => setIsOpen(!isOpen)} {...props}>
      <Link href={link.to}>
        <a
          className={clsx(
            "py-4 px-6 hover:bg-slate-800 inline-block w-full md:w-auto",
            {
              "bg-slate-800": asPath.includes(link.to),
            }
          )}
        >
          {link.name}
        </a>
      </Link>
    </li>
  );
};
