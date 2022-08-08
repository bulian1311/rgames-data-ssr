import React, { FormEvent } from "react";
import { Input } from "@components";
import { selectItemsFilterSearch, setItemsFilterSearch } from "@store";
import { useAppSelector, useAppDispatch } from "@hooks";
import { Props } from "./search.props";

export const ItemsSearch = ({ ...props }: Props): JSX.Element => {
  const dispatch = useAppDispatch();
  const filterSearch = useAppSelector(selectItemsFilterSearch);

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    dispatch(setItemsFilterSearch(newValue));
  };

  const onClear = () => {
    dispatch(setItemsFilterSearch(""));
  };

  return (
    <div className="flex gap-4 items-center">
      <span>Найти:</span>
      <Input
        icon="search"
        onChange={handleChange}
        onClear={onClear}
        value={filterSearch}
      />
    </div>
  );
};
