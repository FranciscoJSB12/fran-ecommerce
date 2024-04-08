import type { GetServerSideProps } from "next";
import { fecthProducts } from "@/utils/fetchProducts";
import type { ProductType } from "@/models/product";
import SearchBar from "@/components/products/SearchBar";
import ProductGrid from "@/components/products/ProductGrid";
import ProductCard from "@/components/products/ProductCard";

interface SearchPageProps {
  foundProducts: ProductType[];
  ok: boolean;
}

export default function SearchPage({ foundProducts, ok }: SearchPageProps) {
  let view: JSX.Element = (
    <ProductGrid>
      {foundProducts.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </ProductGrid>
  );

  if (ok && foundProducts.length === 0) view = <p>Products not found</p>;

  if (!ok) view = <p>Failed to fetch data</p>;

  return (
    <>
      <h2 className="text-gray-800 text-lg font-medium mb-4 italic">
        Found Products
      </h2>
      <SearchBar />
      {view}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;

  const queryParam = (query.q as string) || "";

  const { products, ok } = await fecthProducts();

  const foundProducts = products.filter((p) => {
    const name = p.name.toLowerCase();
    return name.includes(queryParam);
  });

  return {
    props: {
      foundProducts,
      ok,
    },
  };
};
