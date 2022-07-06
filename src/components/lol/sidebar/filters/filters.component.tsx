import React from "react";
import { Block } from "../../../ui";
import { Props } from "./filters.props";

export const Filters = ({ ...props }: Props): JSX.Element => {
  return <Block {...props}>filters</Block>;
};
