import { AnchorHTMLAttributes } from "react";

export type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  name: string;
  activeClassName: string;
};
