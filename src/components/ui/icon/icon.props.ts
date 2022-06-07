import { HTMLAttributes } from "react";
import { TIcon } from "../../../types/icon.type";

export type Props = HTMLAttributes<HTMLElement> & {
  type: TIcon;
  size?: "sm" | "normal" | "lg";
};
