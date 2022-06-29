import React from "react";
import clsx from "clsx";
import { NavLink } from "../nav-link";
import { Props } from "./nav-links.props";

export const NavLinks = ({ isOpen, ...props }: Props): JSX.Element => {
  const links = [
    {
      name: "League of Legends",
      to: "/lol",
      sublinks: [
        { name: "Sublink1", to: "/" },
        { name: "Sublink2", to: "/" },
        { name: "Sublink3", to: "/" },
        { name: "Sublink4", to: "/" },
        { name: "Sublink5", to: "/" },
      ],
    },
    { name: "Team Fight Tactiks", to: "/tft" },
  ];

  const renderLinks = () => {
    return links.map((link) => (
      <div key={link.name}>
        <NavLink link={link} />
      </div>
    ));
  };

  return (
    <ul
      className={clsx(
        "absolute w-full h-[100vh] bg-slate-900 py-24 left-0 top-0 pl-4 md:flex md:static md:py-0 uppercase md:items-center md:w-auto md:h-auto duration-500",
        {
          "left-0": isOpen,
          "left-[-100%]": !isOpen,
        }
      )}
      {...props}
    >
      {renderLinks()}
    </ul>
  );
};
