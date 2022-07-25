import React from "react";
import Image from "next/image";
import { Props } from "./item-small.props";

export const ItemSmall = ({ item, ...props }: Props): JSX.Element => {
  return (
    <Image
      width={66}
      height={66}
      src={`http://ddragon.leagueoflegends.com/cdn/12.11.1/img/item/${item.image}`}
    />
  );
};
