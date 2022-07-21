import { HTMLAttributes, ReactNode } from "react";

export type Props = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};
