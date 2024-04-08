import type { GetStaticProps } from "next";
import ProductGrid from "@/components/products/ProductGrid";
import ProductCard from "@/components/products/ProductCard";
import SearchBar from "@/components/products/SearchBar";
import type { ProductType } from "@/models/product";
import { fecthProducts } from "../utils/fetchProducts";

interface HomeProps {
  ok: boolean;
  products: ProductType[];
}

export default function Home({ products, ok }: HomeProps) {
  return (
    <>
      <h2 className="text-gray-800 text-lg font-medium mb-4 italic">Home</h2>
      <SearchBar />
      {ok ? (
        <ProductGrid>
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </ProductGrid>
      ) : (
        <p>Failed to fetch data</p>
      )}
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { products, ok } = await fecthProducts();
  return {
    props: {
      ok,
      products,
    },
    revalidate: 30,
  };
};
