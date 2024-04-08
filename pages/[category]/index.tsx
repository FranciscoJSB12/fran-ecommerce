import type { GetStaticProps, GetStaticPaths } from "next";
import { fecthProducts } from "@/utils/fetchProducts";
import ProductGrid from "@/components/products/ProductGrid";
import ProductCard from "@/components/products/ProductCard";
import type { ProductType } from "@/models/product";
import { PAGES_CATEGORIES } from "@/utils/pagesCategories";
import SearchBar from "@/components/products/SearchBar";

interface CategoryProps {
  category: string;
  categoryProducts: ProductType[];
  ok: boolean;
}

export default function Category({
  category,
  categoryProducts,
  ok,
}: CategoryProps) {
  return (
    <>
      <h2 className="text-gray-800 text-lg font-medium mb-4 italic">
        {category.replace(/\b\w/g, (l) => l.toUpperCase())}
      </h2>
      <SearchBar />
      {ok ? (
        <ProductGrid>
          {categoryProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </ProductGrid>
      ) : (
        <p>Failed to fecth data</p>
      )}
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const preGeneratedPaths = PAGES_CATEGORIES.map((path) => ({
    params: { category: path },
  }));

  return {
    paths: preGeneratedPaths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.category;

  const { products, ok } = await fecthProducts();

  const categoryProducts = products.filter(
    (p) => p.category.toLowerCase() === slug
  );

  return {
    props: {
      category: slug,
      categoryProducts,
      ok,
    },
    revalidate: 30,
  };
};
