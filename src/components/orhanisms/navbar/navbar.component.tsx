import React from "react";
import { Props } from "./navbar.props";

export const Navbar = ({ ...props }: Props): JSX.Element => {
  return <div {...props}>Navbar</div>;
};
