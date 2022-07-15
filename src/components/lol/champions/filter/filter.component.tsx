import React, { FormEvent } from "react";
import clsx from "clsx";
import { Input } from "../../../ui";
import { useAppSelector, useAppDispatch } from "../../../../hooks";
import { selectFilterValue, setFilterValue } from "./filter.slice";
import { Props } from "./filter.props";

export const Filter = ({ className, ...props }: Props): JSX.Element => {
  const dispatch = useAppDispatch();
  const filterValue = useAppSelector(selectFilterValue);

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    dispatch(setFilterValue(newValue));
  };

  return (
    <div className={clsx(className, "flex flex-col")} {...props}>
      <div className="flex gap-4 items-center">
        <span>По имени: </span>
        <Input icon="search" onChange={handleChange} value={filterValue} />
      </div>
    </div>
  );
};
