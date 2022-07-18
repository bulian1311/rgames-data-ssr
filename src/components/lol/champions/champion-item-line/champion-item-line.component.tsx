import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Props } from "./champion-item-line.props";

export const ChampionItemLine = ({
  champion,
  ...props
}: Props): JSX.Element => {
  return (
    <div {...props}>
      <Link href={`/lol/champion/${champion.id}`}>
        <a>
          <Image
            className="hover:scale-110"
            src={`http://ddragon.leagueoflegends.com/cdn/12.11.1/img/champion/${champion.image}`}
            width={80}
            height={80}
          />
        </a>
      </Link>
    </div>
  );
};
