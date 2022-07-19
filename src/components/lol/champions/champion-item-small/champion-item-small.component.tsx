import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Props } from "./champion-item-small.props";

export const ChampionItemSmall = ({
  champion,
  ...props
}: Props): JSX.Element => {
  return (
    <div className="hover:scale-110 basis-24" {...props}>
      <Link href={`/lol/champion/${champion.id}`}>
        <a>
          <Image
            src={`http://ddragon.leagueoflegends.com/cdn/12.11.1/img/champion/${champion.image}`}
            width={96}
            height={96}
          />
        </a>
      </Link>
    </div>
  );
};
