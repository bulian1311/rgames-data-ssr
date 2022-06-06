import { TSubLink } from "./sub-link.type";

export type TNavLink = {
  name: string;
  to: string;
  sublinks?: TSubLink[];
};
