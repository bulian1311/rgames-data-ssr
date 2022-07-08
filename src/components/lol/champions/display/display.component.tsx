import React from "react";
import { Props } from "./display.props";

export const Display = ({ ...props }: Props): JSX.Element => {
  return <div {...props}>Display</div>;
};
