import React from "react";
import { useAppSelector } from "../../../hooks";
import { ChampionItem } from "./champion-item";
import { Filter } from "./filter";
import { Sort, selectAsc, selectValue } from "./sort";
import { Display } from "./display";
import { Props } from "./champions.props";

export const Champions = ({ champions, ...props }: Props): JSX.Element => {
  const asc = useAppSelector(selectAsc);
  const value = useAppSelector(selectValue);

  const renderChampions = champions.map((champ) => (
    <ChampionItem key={champ.key} champion={champ} />
  ));

  return (
    <div className="flex flex-col gap-4">
      <Filter />
      <div className="flex items-center justify-between">
        <Sort />
        <Display />
      </div>
      <div className="flex flex-wrap justify-between gap-2" {...props}>
        {renderChampions}
      </div>
    </div>
  );
};
