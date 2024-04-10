import { MouseEvent } from "react";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/outline";
import useProductCard from "@/hooks/products/useProductCard";
import ProductDetail from "../ProductDetail";
import type { ProductType } from "@/models/product";

interface ProductCardProps {
  product: ProductType;
  addProductToCart: (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    product: ProductType
  ) => void;
  shoppingCartItems: ProductType[];
}

export default function ProductCard({
  product,
  addProductToCart,
  shoppingCartItems,
}: ProductCardProps) {
  const { isProductDetailOpen, openProductDetail, closeProductDetail } =
    useProductCard();
  const renderIcon = (): JSX.Element => {
    const isItemInCart = shoppingCartItems.some((p) => p.id === product.id);

    if (!isItemInCart)
      return (
        <button
          onClick={(e) => addProductToCart(e, product)}
          className="absolute top-0 right-0 m-2 bg-blue-600 w-10 h-10 rounded-full p-1 flex justify-center items-center font-light text-xl"
        >
          <PlusIcon className="h-6 w-6 text-white" />
        </button>
      );

    return (
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute top-0 right-0 m-2 bg-blue-600 w-10 h-10 rounded-full p-1 flex justify-center items-center font-light text-xl cursor-default"
      >
        <CheckIcon className="h-6 w-6 text-white" />
      </div>
    );
  };

  return (
    <>
      <article
        className="bg-white cursor-pointer w-72 shadow-2xl"
        onClick={openProductDetail}
      >
        <figure className="w-72 h-64 relative">
          <img
            src={product.image}
            className="w-full h-full rounded-t-lg object-cover"
            alt={product.name}
          />
          <p className="absolute bottom-0 left-0 m-2 bg-white/60 py-0.5 px-3 rounded-lg text-xs text-black">
            {product.category}
          </p>
          {renderIcon()}
        </figure>
        <p className="py-2 px-2 flex justify-between items-center">
          <span className="font-light text-sm">{product.name}</span>
          <span className="font-medium text-lg">${product.price}</span>
        </p>
      </article>
      <ProductDetail
        isProductDetailOpen={isProductDetailOpen}
        closeProductDetail={closeProductDetail}
        product={product}
      />
    </>
  );
}
