import { useState, MouseEvent } from "react";

type openShoppingCartType = () => void;

export default function useProductCard() {
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

  const openProductDetail = (): void => {
    setIsProductDetailOpen(true);
  };

  const closeProductDetail = (): void => {
    setIsProductDetailOpen(false);
  };

  const addProductToCart = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    openShoppingCart: openShoppingCartType
  ): void => {
    e.stopPropagation();
    openShoppingCart();
  };

  return {
    isProductDetailOpen,
    openProductDetail,
    closeProductDetail,
    addProductToCart,
  };
}
