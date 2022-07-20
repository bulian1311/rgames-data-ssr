import React from "react";
import { Item } from "./item";
import { Props } from "./items.props";

export const Items = ({ items, ...props }: Props): JSX.Element => {
  const renderItems = () => {
    return items.map((item) => <Item key={item.image.full} item={item} />);
  };

  return (
    <div className="flex flex-wrap gap-2" {...props}>
      {renderItems()}
    </div>
  );
};
