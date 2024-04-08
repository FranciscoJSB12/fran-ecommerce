import { ReactNode } from "react";

interface ProductGridProps {
  children: ReactNode;
}

export default function ProductGrid({ children }: ProductGridProps) {
  return (
    <section className="w-full pt-5 grid grid-cols-1 justify-items-center gap-y-14 md:grid-cols-2 md:max-w-[636px] lg:grid-cols-3 lg:max-w-[944px]">
      {children}
    </section>
  );
}
