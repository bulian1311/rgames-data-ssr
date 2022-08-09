import React from "react";
import clsx from "clsx";
import { useAppSelector } from "@hooks";
import {
  selectDisplayValue,
  selectItemsFilterSearch,
  selectItemsFilterTags,
} from "@store";
import { Display } from "@components";
import { ItemsFilter } from "./filter";
import { ItemLine } from "./item-line";
import { ItemLarge } from "./item-large";
import { ItemSmall } from "./item-small";
import { Props } from "./items.props";

export const Items = ({ items, ...props }: Props): JSX.Element => {
  const displayValue = useAppSelector(selectDisplayValue);
  const itemSearch = useAppSelector(selectItemsFilterSearch);
  const itemTags = useAppSelector(selectItemsFilterTags);
  let Item: ({ item }: any) => JSX.Element = ItemLarge;

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

  const filterItems = () => {
    let filteredItems = items.data;

    if (itemSearch) {
      filteredItems = filteredItems.filter((item) => {
        const itemRu = item.name
          .toLocaleLowerCase()
          .includes(itemSearch.toLocaleLowerCase());

        const itemEn = item.colloq
          .toLocaleLowerCase()
          .includes(itemSearch.toLocaleLowerCase());

        return itemRu || itemEn;
      });
    }

    if (itemTags.length > 0) {
      filteredItems = filteredItems.filter((item) => {
        let includeTag = itemTags.every((tag) => item.tags.includes(tag));

        return includeTag;
      });
    }

    return filteredItems;
  };

  const renderItems = () => {
    const filteredItems = filterItems();

    return filteredItems.map((item) => <Item key={item.image} item={item} />);
  };

  return (
    <>
      <ItemsFilter tree={items.tree} />
      <div className="flex items-center justify-end">
        <Display />
      </div>
      {displayValue === "lines" && (
        <div className="flex justify-between items-center">
          <span>Предмет</span>
          <span>Цена</span>
        </div>
      )}
      <div
        className={clsx("flex gap-2", {
          "flex-col": displayValue === "lines",
          "flex-wrap": displayValue !== "lines",
        })}
        {...props}
      >
        {renderItems()}
      </div>
    </>
  );
};
