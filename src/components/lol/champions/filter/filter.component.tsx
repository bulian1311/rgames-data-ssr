import React from "react";
import clsx from "clsx";
import { ChampionsSearch } from "./search";

import { Props } from "./filter.props";

export const ChampionFilter = ({ className, ...props }: Props): JSX.Element => {
  return (
    <div className={clsx(className, "flex flex-col")} {...props}>
      <ChampionsSearch />
    </div>
  );
};
