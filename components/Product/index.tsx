import React, { useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import Tshirt from "../../assets/tshirt.jpeg";
import { faShippingFast, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Product } from '../../types/products'
import { cartContext } from "../../context/cart/cartContext";

const Product = ({ product }: { product: Product }) => {
  const router = useRouter();
  const { addToCart } = useContext(cartContext);

  return (
    <div
      className={`w-full md:w-1/2 lg:w-1/3 h-80 flex flex-col mb-14 md:px-4`}
    >
      <div className="overflow-hidden flex flex-col justify-center mb-4">
        <Image src={product?.image ?? Tshirt} alt="tshirt" />
      </div>
      {/* <div className={`h-full`}>
            </div> */}
      <div className="flex justify-between items-center">
        <div className="w-3/5">
          {/* <h4 onClick={() => router.push(`/shop/${product.id}`)} className={`text-lg font-bold mb-2`}>Kaos Ngabers</h4> */}
          <h4 className={`text-lg font-bold mb-2`}>
            <Link href={`/shop/${product?.id}`}>{product?.name ?? "Kaos Ngabers"}</Link>
          </h4>
          <h5 className={`text-lg mb-2`}>{`${product?.price ?? '$59'} XAF`}</h5>
          <div className={`flex`}>
            <FontAwesomeIcon
              style={{ width: 20, marginRight: 5 }}
              color={"#f8bc4e"}
              icon={faStar}
            />
            <FontAwesomeIcon
              style={{ width: 20, marginRight: 5 }}
              color={"#f8bc4e"}
              icon={faStar}
            />
            <FontAwesomeIcon
              style={{ width: 20, marginRight: 5 }}
              color={"#f8bc4e"}
              icon={faStar}
            />
          </div>
        </div>
        <div className="self-end">
          <button onClick={() => addToCart(product)} className="bg-primary text-white font-bold text-sm sm:text-lg rounded-full py-2 px-4">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
