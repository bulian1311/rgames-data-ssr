import React from "react";
import clsx from "clsx";
import { Icon } from "../../../../ui";
import { Props } from "./display-button.props";

export const DisplayButton = ({
  icon,
  active,
  ...props
}: Props): JSX.Element => {
  return (
    <button
      className={clsx("p-2", {
        "bg-slate-800": active,
      })}
      {...props}
    >
      <Icon type={icon} />
    </button>
  );
};
