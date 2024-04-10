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

  return {
    isProductDetailOpen,
    openProductDetail,
    closeProductDetail,
  };
}
