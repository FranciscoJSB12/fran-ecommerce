import { XMarkIcon } from "@heroicons/react/24/outline";
import type { PickedProductType } from "@/models/pickedProduct";
import TransparentBackground from "@/components/ui/TransparentBackground";

interface ShoppingCartProps {
  shoppingCartItems: PickedProductType[];
  isShoppingCartOpen: boolean;
  closeShoppingCart: () => void;
}

export default function ShoppingCart({
  shoppingCartItems,
  isShoppingCartOpen,
  closeShoppingCart,
}: ShoppingCartProps) {
  return (
    <>
      <aside
        className={`transition-all ease-in-out duration-300 ${
          !isShoppingCartOpen ? "right-[-384px]" : "right-0"
        } w-full max-w-sm h-screen flex flex-col fixed top-0 z-20 bg-white`}
      >
        <div className="w-full p-6 flex justify-between items-center">
          <h1 className="text-gray-700 text-xl font-medium">My Order</h1>
          <div className="cursor-pointer" onClick={closeShoppingCart}>
            <XMarkIcon className="h-6 w-6 text-black" />
          </div>
        </div>
        <div className="px-6 overflow-y-scroll flex-1">
          {shoppingCartItems.map((p) => (
            <p key={p.id}>{p.name}</p>
          ))}
        </div>
        <div className="px-6 pb-6">
          <p className="flex flex-row justify-between items-center m-4">
            <span className="font-light">Total:</span>
            <span className="font-medium text-2xl"></span>
          </p>
          <button className="w-full h-14 rounded-lg bg-blue-600 text-white text-lg">
            Buy
          </button>
        </div>
      </aside>
      {isShoppingCartOpen && <TransparentBackground />}
    </>
  );
}
