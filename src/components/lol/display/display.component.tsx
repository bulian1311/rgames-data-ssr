import React from "react";
import { useAppSelector, useAppDispatch } from "@hooks";
import { selectDisplayValue, TDisplayValue, setDisplayValue } from "@store";
import { DisplayButton } from "./display-button";
import { Props } from "./display.props";

export const Display = ({ ...props }: Props): JSX.Element => {
  const dispatch = useAppDispatch();
  const displayValue = useAppSelector(selectDisplayValue);

  const handleClick = (value: TDisplayValue) => {
    dispatch(setDisplayValue(value));
  };

  return (
    <div className="flex items-center" {...props}>
      <span className="uppercase mr-1">отображение:</span>
      <DisplayButton
        icon="lines"
        onClick={() => handleClick("lines")}
        active={displayValue === "lines"}
      />
      <DisplayButton
        icon="cell"
        onClick={() => handleClick("cell")}
        active={displayValue === "cell"}
      />
      <DisplayButton
        icon="table"
        onClick={() => handleClick("table")}
        active={displayValue === "table"}
      />
    </div>
  );
};
