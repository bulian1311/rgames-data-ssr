import React from "react";
import { Props } from "./layout.props";
import { Navbar, Footer } from "../../orhanisms";

export const Layout = ({ children }: Props): JSX.Element => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto mt-4">{children}</main>
      <Footer />
    </>
  );
};
