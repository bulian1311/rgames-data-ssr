import React from "react";
import clsx from "clsx";
import { Props } from "./icon.props";
import { ChevronLeftIcon, ChevronRightIcon, LinesIcon } from "../../../icons";

export const Icon = ({
  type,
  size = "normal",
  className,
  ...props
}: Props): JSX.Element => {
  let Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;

  switch (type) {
    case "chevron-left":
      Icon = ChevronLeftIcon;
      break;
    case "chevron-right":
      Icon = ChevronRightIcon;
      break;
    case "lines":
      Icon = LinesIcon;
      break;
  }

  return (
    <i
      className={clsx(className, {
        "w-2 h-2": size === "sm",
        "w-5 h-5": size === "normal",
        "w-8 h-8": size === "lg",
      })}
      {...props}
    >
      <Icon fill="white" className="text-slate-200" />
    </i>
  );
};
