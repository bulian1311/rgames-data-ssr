import React, { ReactNode } from "react";
import clsx from "clsx";
import { useAppSelector } from "../../../hooks";
import { ChampionItemSmall } from "./champion-item-small";
import { ChampionItemLarge } from "./champion-item-large";
import { ChampionItemLine } from "./champion-item-line";
// import { Filter, selectFilterValue } from "./filter";
// import { Sort, selectSortAsc, selectSortValue } from "./sort";
import { Display, selectDisplayValue } from "../../../features";
import { Props } from "./champions.props";
import { TLolChampionShort } from "../../../types";

export const Champions = ({ champions, ...props }: Props): JSX.Element => {
  // const filterValue = useAppSelector(selectFilterValue);
  // const sortAsc = useAppSelector(selectSortAsc);
  // const sortValue = useAppSelector(selectSortValue);
  const displayValue = useAppSelector(selectDisplayValue);

  let ChampionItem = ChampionItemSmall;

  switch (displayValue) {
    case "lines":
      ChampionItem = ChampionItemLine;
      break;
    case "table":
      ChampionItem = ChampionItemSmall;
      break;
    case "cell":
      ChampionItem = ChampionItemLarge;
      break;
  }

  // const filterChampions = () => {
  //   let filteredChampions = champions;

  //   if (filterValue) {
  //     filteredChampions = champions.filter((champ) => {
  //       return champ.name
  //         .toLocaleLowerCase()
  //         .includes(filterValue.toLocaleLowerCase());
  //     });
  //   }

  //   return filteredChampions;
  // };

  // const sortChampions = (champs: TLolChampionShort[]) => {
  //   let reversedList: TLolChampionShort[] = champs;

  //   if (!sortAsc && sortValue === "name") {
  //     reversedList = champs.slice().reverse();
  //   }

  //   return reversedList;
  // };

  const renderChampions = () => {
    let championItems: ReactNode = [];
    // let filteredChampions = filterChampions();
    // filteredChampions = sortChampions(filteredChampions);

    // championItems = filteredChampions.map((champ) => (
    //   <ChampionItem key={champ.key} champion={champ} />
    // ));

    //---------------
    championItems = champions.map((champ) => (
      <ChampionItem key={champ.key} champion={champ} />
    ));
    //---------------

    return championItems;
  };

  return (
    <>
      {/* <Filter /> */}
      <div className="flex items-center justify-between">
        {/* <Sort /> */}
        <Display />
      </div>
      <div
        className={clsx("flex flex-wrap gap-2", {
          "flex-col": displayValue === "lines",
        })}
        {...props}
      >
        {renderChampions()}
      </div>
    </>
  );
};
