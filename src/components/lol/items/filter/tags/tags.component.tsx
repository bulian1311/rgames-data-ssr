import React from "react";
import { Headline } from "@components";
import { ItemTag } from "./tag";
import { Props } from "./tags.props";

export const ItemsTags = ({ tree, ...props }: Props): JSX.Element => {
  const renderTags = () => {
    return tree.tags.map((tag) => (
      <li>
        <ItemTag name={tag} />
      </li>
    ));
  };

  return (
    <div {...props}>
      <Headline tag="h4">{tree.header}</Headline>
      <ul>{renderTags()}</ul>
    </div>
  );
};
