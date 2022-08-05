import React, { useState } from "react";
import clsx from "clsx";
import { useAppDispatch } from "@hooks";
import { setItemsFilterTag } from "@store";
import { TTagMatching, tagMatching } from "./tag.enum";
import { Props } from "./tag.props";

export const ItemTag = ({ tag, ...props }: Props): JSX.Element => {
  const [active, setActive] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const matchTag: TTagMatching = tag as TTagMatching;

  const handleClick = () => {
    setActive(!active);
    dispatch(setItemsFilterTag(tag));
  };

  return (
    <span
      onClick={handleClick}
      className={clsx("text-sm   leading-3 cursor-pointer block px-2 py-1", {
        "text-slate-400 hover:text-slate-200": !active,
        "bg-purple-900 text-slate-200": active,
      })}
      {...props}
    >
      {tagMatching[matchTag]}
    </span>
  );
};
