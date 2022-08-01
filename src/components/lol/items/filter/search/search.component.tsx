import React from "react";
import { Input } from "@components";
import { Props } from "./search.props";

export const ItemsSearch = ({ ...props }: Props): JSX.Element => {
  return (
    <div className="flex gap-4 items-center">
      <span>Найти:</span>
      <Input
        icon="search"
        onChange={() => {}}
        onClear={() => {}}
        value={"qq"}
      />
    </div>
  );
};
