import { HTMLAttributes } from "react";
import { TNavLink } from "../../../types/nav-link.type";

export type Props = HTMLAttributes<HTMLElement> & {
  link: TNavLink;
};
