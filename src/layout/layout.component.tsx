import React from 'react';
import Image from 'next/image';
import { Props } from './layout.props';
import { Navbar } from './navbar';
import { Footer } from './footer';

export const Layout = ({ children }: Props): JSX.Element => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 w-full h-full z-[-1]">
        <Image
          priority
          layout="fill"
          objectFit="cover"
          objectPosition="cover"
          src={'/bg.jpg'}
        />
      </div>
      <div className="fixed top-0 left-0 w-full h-full z-[-1] bg-bgimage"></div>

      <Navbar />

      <main className="container pt-20 mx-auto md:pt-32 mb-20 text-slate-200 grow">
        {children}
      </main>

      <Footer />
    </div>
  );
};
