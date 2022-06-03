import React from "react";
import { Props } from "./nav-link.props";

export const NavLink = ({ name, ...props }: Props): JSX.Element => {
  return <div {...props}>{name}</div>;
};
