import React from "react";
import { Props } from "./layout.props";
import { Navbar, Footer } from "../../orhanisms";
import Image from "next/image";

export const Layout = ({ children }: Props): JSX.Element => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full z-[-1]">
        <Image
          layout="fill"
          objectFit="cover"
          objectPosition="cover"
          src={"/bg.jpg"}
        />
      </div>

      <Navbar />
      <main className="container px-6 pt-20 sm:px-10 md:px-20 lg:px-60 md:pt-32">
        {children}
      </main>
      <Footer />
    </>
  );
};
