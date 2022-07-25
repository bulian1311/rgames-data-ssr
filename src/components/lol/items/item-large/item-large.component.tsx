import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ItemModal } from "../item-modal";
import { Props } from "./item-large.props";

export const ItemLarge = ({ item, ...props }: Props): JSX.Element => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState<boolean>(true);

  return (
    <div
      className="flex flex-col items-center gap-2 p-2 bg-slate-800 hover:bg-slate-700 cursor-pointer"
      onMouseEnter={() => setHidden(false)}
      onMouseLeave={() => setHidden(true)}
      onMouseMove={(e) => setPosition({ x: e.pageX, y: e.pageY })}
      {...props}
    >
      <Image
        width={80}
        height={80}
        src={`http://ddragon.leagueoflegends.com/cdn/12.11.1/img/item/${item.image}`}
      />
      <ItemModal x={position.x} y={position.y} hidden={hidden} />
    </div>
  );
};
