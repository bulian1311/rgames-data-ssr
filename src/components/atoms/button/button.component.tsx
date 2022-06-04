import React from "react";
import { Props } from "./button.props";
import styles from "./button.module.css";

export const Button = ({ name, ...props }: Props): JSX.Element => {
  return (
    <button
      className="bg-slate-800 text-slate-200 px-4 py-2 rounded-md"
      {...props}
    >
      {name}
    </button>
  );
};
