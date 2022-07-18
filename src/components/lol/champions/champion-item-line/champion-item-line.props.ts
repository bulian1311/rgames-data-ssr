import { HTMLAttributes } from "react";
import { TLolChampionShort } from "../../../../types";

export type Props = HTMLAttributes<HTMLDivElement> & {
  champion: TLolChampionShort;
};
