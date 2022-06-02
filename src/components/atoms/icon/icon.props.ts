import { HTMLAttributes } from "react";
import { IconType } from "../../../icons/icon.types";

export type Props = HTMLAttributes<HTMLElement> & {
  type: IconType;
  size?: "sm" | "normal" | "lg";
};
