import { HTMLAttributes, ReactNode } from "react";

export type Props = HTMLAttributes<HTMLDivElement> & {
  // hidden: boolean;
  // x: number;
  // y: number;
  content: ReactNode;
};
