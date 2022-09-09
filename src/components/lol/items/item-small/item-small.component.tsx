import React from "react";
import Link from "next/link";
import { Props } from "./item-small.props";
import { ItemModal } from "../item-modal";

export const ItemSmall = ({ item, ...props }: Props): JSX.Element => {
  return (
    <ItemModal itemId={item.id}>
      <Link href={`/lol/item/${item.id}`}>
        <a>
          <img
            className="rounded-md hover:scale-110"
            width={66}
            height={66}
            src={`http://ddragon.leagueoflegends.com/cdn/12.11.1/img/item/${item.image}`}
          />
        </a>
      </Link>
    </ItemModal>
  );
};
