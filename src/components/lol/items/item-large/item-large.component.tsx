import React from "react";
import Image from "next/image";
import { Modal } from "@components";
import { ItemModal } from "../item-modal";
import { Props } from "./item-large.props";

export const ItemLarge = ({ item, ...props }: Props): JSX.Element => {
  return (
    <Modal content={<ItemModal item={item} />}>
      <div className="flex flex-col items-center gap-2 p-2 bg-slate-800 hover:bg-slate-700 cursor-pointer rounded-md">
        <Image
          className="rounded-md"
          width={80}
          height={80}
          src={`http://ddragon.leagueoflegends.com/cdn/12.11.1/img/item/${item.image.full}`}
        />
      </div>
    </Modal>
  );
};
