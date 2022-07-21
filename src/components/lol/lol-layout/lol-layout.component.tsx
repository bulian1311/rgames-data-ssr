import React from "react";
import clsx from "clsx";
import { Block } from "../../ui";
import { Sidebar } from "../sidebar";
import { Props } from "./lol-layout.props";

export const LolLayout = ({
  children,
  className,
  ...props
}: Props): JSX.Element => {
  return (
    <div className={clsx(className, "flex space-x-8")} {...props}>
      <Sidebar />
      <Block className="flex flex-col gap-4 w-full">{children}</Block>
    </div>
  );
};
