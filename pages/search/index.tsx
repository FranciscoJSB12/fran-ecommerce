import type { GetServerSideProps } from 'next';
import CategoryLayout from '@/components/ui/CategoryLayout';
import { fecthProducts } from '@/utils/fetchProducts';
import type { ProductType } from '@/interfaces/product';
import ProductGrid from '@/components/products/ProductGrid';
import ProductCard from '@/components/products/ProductCard';

interface SearchPageProps {
  foundProducts: ProductType[];
  ok: boolean;
}

export default function SearchPage({ foundProducts, ok }: SearchPageProps) {
  return (
    <CategoryLayout
      responseOk={ok}
      productsQty={foundProducts.length}
      title="found products"
    >
      <ProductGrid products={foundProducts} />
    </CategoryLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;

  const queryParam = (query.q as string) || '';

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
