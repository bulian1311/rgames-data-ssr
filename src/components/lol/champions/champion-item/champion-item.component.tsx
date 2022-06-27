import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Props } from "./champion-item.props";

export const ChampionItem = ({ champion, ...props }: Props): JSX.Element => {
  return (
    <div className="hover:scale-110" {...props}>
      <Link href={`/lol/champion/${champion.id}`}>
        <a>
          <Image
            src={`http://ddragon.leagueoflegends.com/cdn/12.11.1/img/champion/${champion.image}`}
            priority
            width={100}
            height={100}
          />
        </a>
      </Link>
    </div>
  );
};
