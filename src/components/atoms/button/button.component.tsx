import React from "react";
import { Props } from "./button.props";
import styles from "./button.module.css";

export const Button = ({ name, ...props }: Props): JSX.Element => {
  return (
    <button
      className="bg-slate-900 border-2 border-purple-900 font-medium text-slate-200 px-4 py-2 rounded-md hover:bg-purple-900"
      {...props}
    >
      {name}
    </button>
  );
};
