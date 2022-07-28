import { HTMLAttributes } from "react";
import { TIcon } from "../../../../types";

export type Props = HTMLAttributes<HTMLButtonElement> & {
  icon: TIcon;
  active: boolean;
};
