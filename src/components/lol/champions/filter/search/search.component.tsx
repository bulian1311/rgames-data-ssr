import React, { FormEvent } from "react";
import { Input } from "@components";
import { useAppSelector, useAppDispatch } from "@hooks";
import { selectChampionsFilterSearch, setChampionsFilterSearch } from "@store";
import { Props } from "./search.props";

export const ChampionsSearch = ({ ...props }: Props): JSX.Element => {
  const dispatch = useAppDispatch();
  const filterSearch = useAppSelector(selectChampionsFilterSearch);

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    dispatch(setChampionsFilterSearch(newValue));
  };

  const onClear = () => {
    dispatch(setChampionsFilterSearch(""));
  };
  return (
    <div className="flex gap-4 items-center">
      <span>По имени: </span>
      <Input
        icon="search"
        onChange={handleChange}
        onClear={onClear}
        value={filterSearch}
      />
    </div>
  );
};
