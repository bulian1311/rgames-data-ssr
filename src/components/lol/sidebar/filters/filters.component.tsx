import React from "react";
import { Block } from "@components";
import { Props } from "./filters.props";

export const Filters = ({ ...props }: Props): JSX.Element => {
  return <Block {...props}>filters</Block>;
};
