import React from "react";
import clsx from "clsx";
import { SubLink } from "../sub-link";
import { Props } from "./sub-links.props";

export const SubLinks = ({
  className,
  sublinks,
  ...props
}: Props): JSX.Element => {
  return (
    <ul
      className={clsx(
        "bg-slate-800 pt-4 w-fit md:rounded-b-md md:absolute md:top-12 md:left-0 md:hidden md:hover:block md:group-hover:block",
        className
      )}
      {...props}
    >
      {sublinks.map((sublink) => (
        <SubLink key={sublink.name} sublink={sublink} />
      ))}
    </ul>
  );
};
