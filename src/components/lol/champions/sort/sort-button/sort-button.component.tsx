import React from "react";
import clsx from "clsx";
import { Icon } from "../../../../ui";
import { useAppSelector } from "../../../../../hooks";
import { selectSortAsc } from "../sort.slice";
import { Props } from "./sort-button.props";

export const SortButton = ({ name, active, ...props }: Props): JSX.Element => {
  const asc = useAppSelector(selectSortAsc);

  return (
    <button
      type="button"
      className={clsx(
        "flex items-center gap-2 p-2 uppercase hover:text-slate-200",
        {
          "bg-slate-800 text-slate-200": active,
        }
      )}
      {...props}
    >
      {name}
      {active && (
        <Icon
          className={clsx("", {
            "rotate-180": !asc,
          })}
          type="caret-down"
        />
      )}
    </button>
  );
};
