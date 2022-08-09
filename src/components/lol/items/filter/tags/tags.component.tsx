import React from "react";
import { Headline } from "@components";
import { ItemTag } from "./tag";
import { THeaderMatching, headerMatching } from "@types";
import { Props } from "./tags.props";

export const ItemsTags = ({ tree, ...props }: Props): JSX.Element => {
  const header: THeaderMatching = tree.header as THeaderMatching;

  const renderTags = () => {
    return tree.tags.map((tag) => {
      return (
        <li key={tag}>
          <ItemTag tag={tag} />
        </li>
      );
    });
  };

  return (
    <div className="bg-slate-800 flex-1 rounded-sm mt-4" {...props}>
      <Headline tag="h4" className="uppercase text-sm mx-2 my-1 cursor-default">
        {headerMatching[header]}
      </Headline>
      <ul>{renderTags()}</ul>
    </div>
  );
};
