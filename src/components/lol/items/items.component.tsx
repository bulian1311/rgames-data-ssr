import React from "react";
import clsx from "clsx";
import { useAppSelector } from "@hooks";
import { selectDisplayValue } from "@store";
import { Display } from "@components";
import { ItemsFilter } from "./filter";
import { ItemLine } from "./item-line";
import { ItemLarge } from "./item-large";
import { ItemSmall } from "./item-small";
import { Props } from "./items.props";

export const Items = ({ items, ...props }: Props): JSX.Element => {
  const displayValue = useAppSelector(selectDisplayValue);
  let Item = ItemLarge;

  switch (displayValue) {
    case "lines":
      Item = ItemLine;
      break;
    case "cell":
      Item = ItemLarge;
      break;
    case "table":
      Item = ItemSmall;
      break;
  }

  const renderItems = () => {
    return items.data.map((item) => <Item key={item.image} item={item} />);
  };

  return (
    <>
      <ItemsFilter tree={items.tree} />
      <div className="flex items-center justify-end">
        <Display />
      </div>
      <div
        className={clsx("flex flex-wrap gap-2", {
          "flex-col": displayValue === "lines",
        })}
        {...props}
      >
        {renderItems()}
      </div>
    </>
  );
};
