import type { GetStaticProps, GetStaticPaths } from 'next';
import { fecthProducts } from '@/utils/fetchProducts';
import CategoryLayout from '@/components/ui/CategoryLayout';
import ProductGrid from '@/components/products/ProductGrid';
import type { ProductType } from '@/interfaces/product';
import { PAGES_CATEGORIES } from '@/utils/pagesCategories';

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
  return {
    paths: PAGES_CATEGORIES.map((path) => ({
    params: { category: path },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { category } = params as { category: string};

  const { products, ok } = await fecthProducts();

  const categoryProducts = products.filter(
    (p) => p.category.toLowerCase() === category
  );

  return {
    props: {
      category,
      categoryProducts,
      ok,
    },
    revalidate: 30,
  };
};
