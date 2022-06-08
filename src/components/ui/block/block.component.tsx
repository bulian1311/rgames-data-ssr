import React from "react";
import { Props } from "./block.props";

export const Block = ({ children, ...props }: Props): JSX.Element => {
  return (
    <section className="bg-slate-900 p-4 rounded-md w-full" {...props}>
      {children}
    </section>
  );
};
