import { HTMLAttributes } from "react";
import { TNavLink } from "../../../types";

export type Props = HTMLAttributes<HTMLElement> & {
  link: TNavLink;
};
