import React, { useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import { SubLinks } from "../";
import { Props } from "./nav-link.props";

export const NavLink = ({ link, ...props }: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="group relative">
      <li
        onClick={() => setIsOpen(!isOpen)}
        className="py-4 px-6 hover:bg-slate-800 inline-block w-full md:w-auto"
        {...props}
      >
        <Link href="/">
          <a>{link.name}</a>
        </Link>
      </li>
      {link.sublinks && (
        <SubLinks
          className={clsx({
            hidden: !isOpen,
            block: isOpen,
          })}
          sublinks={link.sublinks}
        />
      )}
    </div>
  );
};
