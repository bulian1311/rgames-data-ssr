import React from "react";
import { Props } from "./headline.props";
import clsx from "clsx";

export const Headline = ({
  children,
  tag = "h1",
  className,
  ...props
}: Props): JSX.Element => {
  const Tag = tag;

  return (
    <Tag
      className={clsx(className, "font-medium", {
        "text-2xl": tag === "h1",
        "text-xl": tag === "h2",
      })}
      {...props}
    >
      {children}
    </Tag>
  );
};
