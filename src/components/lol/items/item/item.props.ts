import { HTMLAttributes } from "react";
import { TLolItem } from "../../../../types";

export type Props = HTMLAttributes<HTMLDivElement> & {
  item: TLolItem;
};
