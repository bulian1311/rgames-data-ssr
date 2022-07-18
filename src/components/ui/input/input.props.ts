import { InputHTMLAttributes } from "react";
import { TIcon } from "../../../types";

export type TProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: TIcon;
  onClear: () => void;
};
