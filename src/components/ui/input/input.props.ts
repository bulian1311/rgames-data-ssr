import { HTMLAttributes } from "react";
import { TIcon } from "../../../types";

export type Props = HTMLAttributes<HTMLInputElement> & {
  icon?: TIcon;
};
