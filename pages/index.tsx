import Head from 'next/head';
import type { GetStaticProps } from 'next';
import CategoryLayout from '@/components/ui/CategoryLayout';
import ProductGrid from '@/components/products/ProductGrid';
import type { ProductType } from '@/interfaces/product';
import { fecthProducts } from '@/utils/fetchProducts';

interface HomeProps {
  ok: boolean;
  products: ProductType[];
}

export default function Home({ products, ok }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home - franStore</title>
        <meta
          name="description"
          content="franStore is an ecommerce developed by franjs"
        />
        <meta name="keywords" content="fran, store, franstore, franjs" />
      </Head>
      <CategoryLayout responseOk={ok} productsQty={products.length}>
        <ProductGrid products={products} />
      </CategoryLayout>
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
