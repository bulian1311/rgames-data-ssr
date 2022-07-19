import React from "react";
import { Props } from "./items.props";

export const Items = ({ ...props }: Props): JSX.Element => {
  return <div {...props}>Items</div>;
};
