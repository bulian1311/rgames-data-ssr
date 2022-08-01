import React from "react";
import { ItemsSearch } from "./search";
import { Props } from "./filter.props";

export const ItemsFilter = ({ ...props }: Props): JSX.Element => {
  return (
    <div className="flex flex-col" {...props}>
      <ItemsSearch />
    </div>
  );
};
