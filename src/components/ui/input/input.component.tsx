import React from "react";
import { Icon } from "../icon";
import { Props } from "./input.props";

export const Input = ({ icon, ...props }: Props): JSX.Element => {
  return (
    <label className="relative block">
      {icon && (
        <div className="absolute inset-y-0 left-0 flex items-center pl-2">
          <Icon type={icon} size="normal" />
        </div>
      )}
      <input
        className="placeholder:text-slate-400 block bg-slate-800 w-full border border-slate-900 rounded-md py-1 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple-900 focus:ring-purple-900 focus:ring-1 sm:text-sm"
        type="text"
        {...props}
      />
    </label>
  );
};
