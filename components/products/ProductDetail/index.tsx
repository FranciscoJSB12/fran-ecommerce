import { XMarkIcon } from "@heroicons/react/24/outline";
import TransparentBackground from "@/components/ui/TransparentBackground";
import type { ProductType } from "@/models/product";

const currentProduct = {
  id: "120c9c02-4002-42b1-b62a-1c9d2c92016a",
  name: "Sausages",
  category: "Clothes",
  description: "The Football Is Good For Training And Recreational Purposes",
  price: "887.00",
  image: "https://picsum.photos/seed/BNmCcBXm/640/480",
};

interface ProductDetailProps {
  isProductDetailOpen: boolean;
  closeProductDetail: () => void;
  product: ProductType;
}

export default function ProductDetail({
  isProductDetailOpen,
  closeProductDetail,
  product,
}: ProductDetailProps) {
  return (
    <>
      <aside
        className={`transition-all ease-in-out duration-300 ${
          !isProductDetailOpen ? "right-[-384px]" : "right-0"
        } w-full max-w-sm h-screen flex fixed top-0  flex-col z-20 bg-white`}
      >
        <div className="w-full p-6 flex justify-between items-center">
          <h2 className="text-gray-700 text-xl font-medium">Detail</h2>
          <div className="cursor-pointer" onClick={closeProductDetail}>
            <XMarkIcon className="h-6 w-6 text-black" />
          </div>
        </div>
        <figure className="px-6">
          <img
            src={product.image}
            alt={currentProduct.name}
            className="w-full h-full rounded-lg"
          />
        </figure>
        <p className="flex flex-col pt-3 px-6 pb-3">
          <span className="text-gray-700 font-medium text-2xl mb-2">
            {product.name}
          </span>
          <span className="font-medium text-md">${product.price}</span>
        </p>
        <p className="font-light text-sm px-6 pb-6 overflow-y-scroll">
          {product.description}
        </p>
      </aside>
      {isProductDetailOpen && <TransparentBackground />}
    </>
  );
}
