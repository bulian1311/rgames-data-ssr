import React from "react";
import { Props } from "./headline.props";
import clsx from "clsx";

export const Headline = ({
  children,
  tag = "h1",
  ...props
}: Props): JSX.Element => {
  const Tag = tag;

  return (
    <Tag
      {...props}
      className={clsx("font-medium", {
        "text-2xl": tag === "h1",
        "text-xl": tag === "h2",
      })}
    >
      {children}
    </Tag>
  );
};
