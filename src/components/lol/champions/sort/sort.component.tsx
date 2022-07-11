import React, { useState } from "react";
import { SortButton } from "./sort-button";
import { Props } from "./sort.props";

export const Sort = ({ ...props }: Props): JSX.Element => {
  const [active, setActive] = useState<"name" | "ban">("name");

  return (
    <div className="flex items-center gap-1 text-slate-400" {...props}>
      <span className="mr-2 text-slate-200">Сортировать:</span>
      <SortButton
        onClick={() => setActive("name")}
        name="Имя"
        active={active === "name"}
      />
      <SortButton
        onClick={() => setActive("ban")}
        name="Бан%"
        active={active === "ban"}
      />
    </div>
  );
};
