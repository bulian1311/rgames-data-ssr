import React from "react";
import { Display } from "../../../features";
import { ItemCell } from "./item-cell";
import { Props } from "./items.props";

export const Items = ({ items, ...props }: Props): JSX.Element => {
  const renderItems = () => {
    return items.map((item) => <ItemCell key={item.image} item={item} />);
  };

  return (
    <>
      <div className="flex items-center justify-end">
        <Display />
      </div>
      <div className="flex flex-wrap gap-2" {...props}>
        {renderItems()}
      </div>
    </>
  );
};
