import React from "react";
import { Block } from "../../../ui";
import { MenuLink } from "./menu-link";
import { Props } from "./menu.props";

export const Menu = ({ ...props }: Props): JSX.Element => {
  return (
    <Block className="flex flex-col gap-2" {...props}>
      <MenuLink to="/lol/champion" name="Чемпионы" />
      <MenuLink to="/lol/item" name="Предметы" />
      <MenuLink to="/lol/rune" name="Руны" />
    </Block>
  );
};
