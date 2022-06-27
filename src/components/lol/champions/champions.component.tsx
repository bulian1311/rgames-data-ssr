import React from "react";
import { ChampionItem } from "./champion-item";
import { Props } from "./champions.props";

export const Champions = ({ champions, ...props }: Props): JSX.Element => {
  const renderChampions = champions.map((champ) => (
    <ChampionItem key={champ.key} champion={champ} />
  ));

  return (
    <div className="flex flex-wrap justify-between gap-2" {...props}>
      {renderChampions}
    </div>
  );
};
