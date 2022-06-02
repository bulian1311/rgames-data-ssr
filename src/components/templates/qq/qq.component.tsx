import React from "react";
import { Props } from "./qq.props";

export const QQ = ({ ...props }: Props): JSX.Element => {
  return <div {...props}>QQ</div>;
};
