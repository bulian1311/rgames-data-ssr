import React from "react";
import clsx from "clsx";
import { Props } from "./block.props";

export const Block = ({
  children,
  className,
  ...props
}: Props): JSX.Element => {
  return (
    <section
      className={clsx(className, "bg-slate-900 p-4 rounded-md w-full")}
      {...props}
    >
      {children}
    </section>
  );
};
