import useShoppingCart from "@/hooks/products/useShoppingCart";
import ProductCard from "../ProductCard";
import ShoppingCart from "../shoppingCart";
import ShoppingCartBtn from "@/components/products/ShoppingCartBtn";
import type { ProductType } from "@/models/product";

interface ProductGridProps {
  products: ProductType[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const {
    isShoppingCartOpen,
    openShoppingCart,
    closeShoppingCart,
    addProductToCart,
    shoppingCartItems,
  } = useShoppingCart();

  return (
    <>
      <section className="w-full pt-5 grid grid-cols-1 justify-items-center gap-y-14 md:grid-cols-2 md:max-w-[636px] lg:grid-cols-3 lg:max-w-[944px]">
        {products.map((p) => (
          <ProductCard
            product={p}
            key={p.id}
            addProductToCart={addProductToCart}
            shoppingCartItems={shoppingCartItems}
          />
        ))}
      </section>
      <ShoppingCart
        isShoppingCartOpen={isShoppingCartOpen}
        closeShoppingCart={closeShoppingCart}
        shoppingCartItems={shoppingCartItems}
      />
      <ShoppingCartBtn
        openShoppingCart={openShoppingCart}
        totalProducts={shoppingCartItems.length}
      />
    </>
  );
}
