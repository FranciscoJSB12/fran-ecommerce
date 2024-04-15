import { useState, MouseEvent } from 'react';
import type { ProductType } from '@/interfaces/product';
import type { PickedProductType } from '@/interfaces/pickedProduct';

export default function useShoppingCart() {
  const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false);
  const [shoppingCartItems, setShoppingCartItems] = useState<
    PickedProductType[]
  >([]);

  const closeShoppingCart = (): void => {
    setIsShoppingCartOpen(false);
  };

  const openShoppingCart = (): void => {
    setIsShoppingCartOpen(true);
  };

  const addProductToCart = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    product: ProductType
  ): void => {
    e.stopPropagation();
    openShoppingCart();
    setShoppingCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
  };

  return {
    isShoppingCartOpen,
    closeShoppingCart,
    openShoppingCart,
    shoppingCartItems,
    addProductToCart,
  };
}
