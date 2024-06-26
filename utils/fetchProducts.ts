import { URL } from './urls';
import type { ProductType } from '@/interfaces/product';

interface ProductResponse {
  ok: boolean;
  products: ProductType[];
}

export const fecthProducts = async (): Promise<ProductResponse> => {
  try {
    const res = await fetch(URL);
    const products = (await res.json()) as ProductType[];
    return {
      ok: true,
      products,
    };
  } catch (err) {
    console.error(err);
    return {
      ok: false,
      products: [],
    };
  }
};
