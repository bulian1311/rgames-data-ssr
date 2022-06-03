import React from "react";
import { NavLink } from "../../atoms";
import { Props } from "./nav-links.props";

export const NavLinks = ({ ...props }: Props): JSX.Element => {
  const links = [{ name: "Link 1" }, { name: "Link 2" }, { name: "Link 3" }];
  return (
    <div {...props}>
      {links.map((link) => (
        <NavLink key={link.name} name={link.name} />
      ))}
    </div>
  );
};
