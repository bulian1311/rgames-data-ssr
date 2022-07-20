import { HTMLAttributes } from "react";

export type Props = HTMLAttributes<HTMLDivElement> & {
  hidden: boolean;
  x: number;
  y: number;
};
