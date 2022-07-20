import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { Props } from "./item-modal.props";

export const ItemModal = ({ x, y, hidden, ...props }: Props): JSX.Element => {
  return (
    <div
      style={{ top: y, left: x }}
      className={clsx(
        "w-60 h-60 absolute bg-slate-100 z-50",

        {
          hidden: hidden,
        }
      )}
      {...props}
    >
      ItemModal
    </div>
  );
};
