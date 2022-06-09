import React from "react";
import { Block } from "../../ui";
import { MenuLink } from "./menu-link";
import { Props } from "./menu.props";

export const Menu = ({ ...props }: Props): JSX.Element => {
  return (
    <Block className="flex flex-col" {...props}>
      <MenuLink to="/" name="Чемпионы" />
      <MenuLink to="/" name="Предметы" />
      <MenuLink to="/" name="Руны" />
    </Block>
  );
};
