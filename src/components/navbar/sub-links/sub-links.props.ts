import { HTMLAttributes } from "react";
import { TSubLink } from "../../../types/sub-link.type";

export type Props = HTMLAttributes<HTMLElement> & {
  sublinks: TSubLink[];
};
