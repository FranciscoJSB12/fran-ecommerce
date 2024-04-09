import { useState } from "react";

export default function useShoppingCart() {
  const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false);

  const closeShoppingCart = (): void => {
    setIsShoppingCartOpen(false);
  };

  const openShoppingCart = (): void => {
    setIsShoppingCartOpen(true);
  };

  return {
    isShoppingCartOpen,
    closeShoppingCart,
    openShoppingCart,
  };
}
