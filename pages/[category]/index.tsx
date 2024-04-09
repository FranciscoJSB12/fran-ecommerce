import type { GetStaticProps, GetStaticPaths } from "next";
import { fecthProducts } from "@/utils/fetchProducts";
import CategoryLayout from "@/components/ui/CategoryLayout";
import ProductGrid from "@/components/products/ProductGrid";
import ProductCard from "@/components/products/ProductCard";
import type { ProductType } from "@/models/product";
import { PAGES_CATEGORIES } from "@/utils/pagesCategories";

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
    <CategoryLayout
      responseOk={ok}
      productsQty={categoryProducts.length}
      title={category}
    >
      <ProductGrid products={categoryProducts} />
    </CategoryLayout>
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
