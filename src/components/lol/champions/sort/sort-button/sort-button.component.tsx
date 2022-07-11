import React from "react";
import clsx from "clsx";
import { Props } from "./sort-button.props";

export const SortButton = ({ name, active, ...props }: Props): JSX.Element => {
  return (
    <button
      className={clsx("p-2 uppercase hover:text-slate-200", {
        "bg-slate-800 text-slate-200": active,
      })}
      {...props}
    >
      {name}
    </button>
  );
};
