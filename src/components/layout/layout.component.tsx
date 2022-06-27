import React from "react";
import { Props } from "./layout.props";
import { Navbar } from "../navbar";
import { Footer } from "../footer";
import Image from "next/image";

export const Layout = ({ children }: Props): JSX.Element => {
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
      <main className="container pt-20 mx-auto md:pt-32">{children}</main>
      <Footer />
    </>
  );
};
