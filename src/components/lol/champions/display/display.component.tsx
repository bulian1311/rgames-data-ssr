import React from "react";
import { DisplayButton } from "./display-button";
import { useAppSelector, useAppDispatch } from "../../../../hooks";
import {
  selectDisplayValue,
  TDisplayValue,
  setDisplayValue,
} from "./display.slice";
import { Props } from "./display.props";

export const Display = ({ ...props }: Props): JSX.Element => {
  const dispatch = useAppDispatch();
  const displayValue = useAppSelector(selectDisplayValue);

  const handleClick = (value: TDisplayValue) => {
    dispatch(setDisplayValue(value));
  };

  return (
    <div className="flex items-center" {...props}>
      <DisplayButton
        icon="lines"
        onClick={() => handleClick("lines")}
        active={displayValue === "lines"}
      />
      <DisplayButton
        icon="th-large"
        onClick={() => handleClick("th-large")}
        active={displayValue === "th-large"}
      />
      <DisplayButton
        icon="th"
        onClick={() => handleClick("th")}
        active={displayValue === "th"}
      />
    </div>
  );
};
