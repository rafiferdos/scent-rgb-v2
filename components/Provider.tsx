'use client';

import { NextUIProvider } from "@nextui-org/react";
import NavbarTop from "./Navbar";
import Footer from "./Footer";
import { Spacer } from "@nextui-org/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NavbarTop />
      <Spacer y={10} />
      {children}
      <Spacer y={10} />
      <Footer />
    </NextUIProvider>
  );
}