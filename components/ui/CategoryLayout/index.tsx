import type { ReactNode } from "react";
import SearchBar from "@/components/products/SearchBar";

interface CategoryLayoutProps {
  title?: string;
  productsQty: number;
  responseOk: boolean;
  children: ReactNode;
}

export default function CategoryLayout({
  title,
  productsQty,
  responseOk,
  children,
}: CategoryLayoutProps) {
  let errorView: JSX.Element | undefined;

  if (!responseOk) errorView = <p>Failed to fetch data</p>;

  if (responseOk && productsQty === 0) errorView = <p>Products not found</p>;

  return (
    <>
      <h2 className="text-gray-800 text-lg font-medium mb-4 italic">
        {!title ? "Home" : title.replace(/\b\w/, (l) => l.toUpperCase())}
      </h2>
      <SearchBar />
      {!errorView ? children : errorView}
    </>
  );
}
