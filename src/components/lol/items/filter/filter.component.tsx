import React from "react";
import { ItemsSearch } from "./search";
import { ItemsTags } from "./tags";
import { Props } from "./filter.props";

export const ItemsFilter = ({ tree, ...props }: Props): JSX.Element => {
  const renderTags = () => {
    return tree.map((t) => <ItemsTags className="flex-1" tree={t} />);
  };

  return (
    <div className="flex flex-col" {...props}>
      <ItemsSearch />
      <div className="flex">{renderTags()}</div>
    </div>
  );
};
