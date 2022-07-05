import React from "react";
import { Menu } from "./menu";
import { Filters } from "./filters";
import { Props } from "./sidebar.props";

export const Sidebar = ({ ...props }: Props): JSX.Element => {
  return (
    <div className="flex flex-col space-y-4 w-64" {...props}>
      <Menu />
      <Filters />
    </div>
  );
};
