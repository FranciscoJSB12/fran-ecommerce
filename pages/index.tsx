import type { GetStaticProps } from "next";
import CategoryLayout from "@/components/ui/CategoryLayout";
import ProductGrid from "@/components/products/ProductGrid";
import type { ProductType } from "@/models/product";
import { fecthProducts } from "@/utils/fetchProducts";

interface HomeProps {
  ok: boolean;
  products: ProductType[];
}

export default function Home({ products, ok }: HomeProps) {
  return (
    <CategoryLayout responseOk={ok} productsQty={products.length}>
      <ProductGrid products={products} />
    </CategoryLayout>
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
