import type { ReactNode } from "react";
import Navigation from "../Navigation";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navigation />
      <main
        className={`flex flex-col items-center mt-20 pb-20 xlg:ml-72 xlg:mt-10 ${inter.className}`}
      >
        {children}
      </main>
    </>
  );
}
