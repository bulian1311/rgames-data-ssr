import React from "react";
import clsx from "clsx";
import { NavLink } from "../nav-link";
import { Props } from "./nav-links.props";

export const NavLinks = ({ isOpen, ...props }: Props): JSX.Element => {
  const links = [{ name: "Link 1" }, { name: "Link 2" }, { name: "Link 3" }];

  const renderLinks = () => {
    return links.map((link) => <NavLink key={link.name} name={link.name} />);
  };

  return (
    <ul
      className={clsx(
        "absolute w-full h-full bg-slate-900 py-24 left-0 top-0 pl-4 md:flex md:static md:py-0 uppercase md:items-center md:gap-8 md:w-auto duration-500",
        {
          "left-0": isOpen,
          "left-[-100%]": !isOpen,
        }
      )}
      {...props}
    >
      {renderLinks()}
    </ul>
  );
};
