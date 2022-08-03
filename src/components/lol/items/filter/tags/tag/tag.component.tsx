import React from "react";
import { Props } from "./tag.props";

export const ItemTag = ({ name, ...props }: Props): JSX.Element => {
  return <span {...props}>{name}</span>;
};
