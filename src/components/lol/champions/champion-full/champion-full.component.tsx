import React from "react";
import { Headline } from "@components";
import { URL, VERSION } from "@services";
import { useAppSelector } from "@hooks";
import { selectChampion, selectChampionStatus } from "@store";
import { Props } from "./champion-full.props";

export const Champion = ({ ...props }: Props): JSX.Element => {
  const champion = useAppSelector(selectChampion);
  const status = useAppSelector(selectChampionStatus);
  const imgurl = `${URL}cdn/${VERSION}/img`;

  if (!champion || status === "pending") return <div>Loading...</div>;

  return (
    <div className="flex gap-4">
      <img
        src={`${imgurl}/champion/${champion && champion.image.full}`}
        width={120}
        height={120}
      />
      <div className="flex flex-col justify-between">
        <Headline>{`${champion.id} (${champion.name})`}</Headline>
        <div className="flex gap-1">
          <img
            src={`${imgurl}/passive/${champion.passive.image.full}`}
            width={50}
            height={50}
          />
          {champion.spells.map((spell) => (
            <img
              key={spell.id}
              src={`${imgurl}/spell/${spell.image.full}`}
              width={50}
              height={50}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
