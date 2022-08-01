import { HTMLAttributes } from "react";
import { TLolItemShort, TLolItemTree } from "@types";

export type Props = HTMLAttributes<HTMLDivElement> & {
  items: { data: TLolItemShort[]; tree: TLolItemTree[] };
};
