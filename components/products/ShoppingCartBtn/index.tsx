import { ShoppingBagIcon } from "@heroicons/react/24/outline";

interface ShoppingCartBtnProps {
  openShoppingCart: () => void;
  totalProducts: number;
}

export default function ShoppingCartBtn({
  openShoppingCart,
  totalProducts,
}: ShoppingCartBtnProps) {
  return (
    <aside
      className="w-14 h-14 rounded-full fixed right-5 bottom-5 bg-blue-800 z-10 flex justify-center items-center cursor-pointer"
      onClick={openShoppingCart}
    >
      <ShoppingBagIcon className="h-6 w-6 text-white" />
      <span className="text-white">{totalProducts}</span>
    </aside>
  );
}
