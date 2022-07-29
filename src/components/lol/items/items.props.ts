import { HTMLAttributes } from "react";
import { TLolItemShort } from "@types";

export type Props = HTMLAttributes<HTMLDivElement> & {
  items: TLolItemShort[];
};
