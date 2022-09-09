import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { useAppSelector } from "@hooks";
import { selectItemById } from "@store";
import { TreeList } from "../tree-list";
import { ItemModal } from "../../item-modal";
import { Props } from "./tree-list-item.props";

export const TreeListItem = ({
  itemId,
  index,
  length,
  ...props
}: Props): JSX.Element => {
  const item = useAppSelector(selectItemById(itemId));

  return (
    <li className="relative p-6" {...props}>
      <div
        className={clsx("border-t-2 absolute h-8 border-gray-400 top-0", {
          "left-2/4 right-0": index === 0 && length > 1,
          "left-0 right-2/4": index === length - 1 && length > 1,
          "left-0 right-0": length === 3 && index === 1,
        })}
      ></div>
      <div className="relative flex justify-center">
        <div className="-mt-6 border-l-2 absolute h-6 border-gray-400 top-0"></div>
        <div className="text-center">
          <div className="flex flex-col justify-center items-center">
            <div className="w-16">
              <Link href={`/lol/item/${itemId}`}>
                <a>
                  <ItemModal itemId={itemId}>
                    <img
                      className="block rounded-md m-auto shadow-md"
                      alt={item.name}
                      src={`http://ddragon.leagueoflegends.com/cdn/12.11.1/img/item/${item.image.full}`}
                    />
                  </ItemModal>
                </a>
              </Link>
            </div>
            <div className="text-gray-600"></div>
          </div>
          {item.from && <TreeList from={item.from} />}
        </div>
      </div>
    </li>
  );
};
