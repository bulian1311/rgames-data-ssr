import React from "react";
import { SortButton } from "./sort-button";
import { useAppSelector, useAppDispatch } from "../../../../hooks";
import {
  selectValue,
  selectAsc,
  setValue,
  setAsc,
  TFilterValue,
} from "./sort.slice";
import { Props } from "./sort.props";

export const Sort = ({ ...props }: Props): JSX.Element => {
  const dispatch = useAppDispatch();
  const activeFilter = useAppSelector(selectValue);
  const asc = useAppSelector(selectAsc);

  const handleClick = (value: TFilterValue) => {
    value !== activeFilter && dispatch(setValue(value));
    value !== activeFilter && dispatch(setAsc(true));

    value === activeFilter && dispatch(setAsc(!asc));
  };

  return (
    <div className="flex items-center gap-1 text-slate-400" {...props}>
      <span className="mr-2 text-slate-200">Сортировать:</span>
      <SortButton
        name="Имя"
        onClick={() => handleClick("name")}
        active={activeFilter === "name"}
      />
      <SortButton
        name="Бан%"
        onClick={() => handleClick("ban")}
        active={activeFilter === "ban"}
      />
    </div>
  );
};
