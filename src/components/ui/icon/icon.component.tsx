import React from "react";
import clsx from "clsx";
import { Props } from "./icon.props";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  LinesIcon,
  RemoveIcon,
  SearchIcon,
  StopIcon,
  ThLargeIcon,
  ThIcon,
} from "../../../icons";

export const Icon = ({
  type,
  size = "normal",
  className,
  ...props
}: Props): JSX.Element => {
  let Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element = SearchIcon;

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
    case "remove":
      Icon = RemoveIcon;
      break;
    case "search":
      Icon = SearchIcon;
      break;
    case "stop":
      Icon = StopIcon;
      break;
    case "th-large":
      Icon = ThLargeIcon;
      break;
    case "th":
      Icon = ThIcon;
      break;
  }

  return (
    <i
      className={clsx(className, {
        "w-2 h-2": size === "sm",
        "w-4 h-4": size === "normal",
        "w-8 h-8": size === "lg",
      })}
      {...props}
    >
      <Icon fill="white" className="text-slate-200" />
    </i>
  );
};
