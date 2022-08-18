import React, { useEffect } from "react";
import { Props } from "./layout.props";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import Image from "next/image";
import { useAppDispatch } from "@hooks";
import { fetchLolChampions, fetchLolItems } from "@store";

export const Layout = ({ children }: Props): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("Data fetching - ddddd");

    dispatch(fetchLolChampions());
    dispatch(fetchLolItems());
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full z-[-1]">
        <Image
          priority
          layout="fill"
          objectFit="cover"
          objectPosition="cover"
          src={"/bg.jpg"}
        />
      </div>

      <Navbar />
      <main className="container pt-20 mx-auto md:pt-32 mb-20">{children}</main>
      <Footer />
    </>
  );
};
