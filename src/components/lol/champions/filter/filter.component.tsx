import React from "react";
import clsx from "clsx";
import { Input } from "../../../ui";
import { Props } from "./filter.props";

export const Filter = ({ className, ...props }: Props): JSX.Element => {
  return (
    <div className={clsx(className, "flex flex-col")} {...props}>
      <div className="flex gap-4 items-center">
        <span>По имени: </span>
        <Input icon="search" />
      </div>
    </div>
  );
};
