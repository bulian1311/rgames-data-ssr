import React from "react";
import { Props } from "./item-line.props";

export const ItemLine = ({ ...props }: Props): JSX.Element => {
  return <div {...props}>ItemLine</div>;
};
