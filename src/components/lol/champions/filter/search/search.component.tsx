import React, { FormEvent } from "react";
import { Input } from "@components";
import { useAppSelector, useAppDispatch } from "@hooks";
import { selectFilterValue, setFilterValue } from "@store";
import { Props } from "./search.props";

export const ChampionsSearch = ({ ...props }: Props): JSX.Element => {
  const dispatch = useAppDispatch();
  const filterValue = useAppSelector(selectFilterValue);

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    dispatch(setFilterValue(newValue));
  };

  const onClear = () => {
    dispatch(setFilterValue(""));
  };
  return (
    <div className="flex gap-4 items-center">
      <span>По имени: </span>
      <Input
        icon="search"
        onChange={handleChange}
        onClear={onClear}
        value={filterValue}
      />
    </div>
  );
};
