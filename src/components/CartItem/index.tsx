import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from "../../assets/shirts/1.jpeg";
import styles from "./Styles.module.css";
import { CartItem } from "../../types/cart";
import { cartContext } from "../../context/cart/cartContext";

const CartItem = ({ item }: { item: CartItem }) => {
  const { product } = item
  const [counter, setCounter] = useState(item?.quantity)
  const { deleteCartItem, updateQuantity } = useContext(cartContext)

  const reduceQuantity = () => {
    if(counter <= 1) {
      return deleteCartItem(product.id)
    }
    setCounter(counter => counter - 1)
    updateQuantity(product.id, counter - 1)
  }

  const updateProductQuantity = () => {
    setCounter(counter => counter + 1)
    updateQuantity(product.id, counter + 1)
  }

  useEffect(() => {

  }, [counter])

  return (
    <tr className="text-xl text-center mb-4">
      <td className="w-1/5">
        <div className="">
          <div className={`${styles.cartImgWrapper} mb-2 p-4`}>
            <Image src={product?.image ?? img} alt="product image" />
          </div>
          <h3 className="font-bold"><Link href={`/shop/${product?.id}`}>{product?.name ?? "Sandals"}</Link></h3>
          <p>size: xl - color: white</p>
        </div>
      </td>
      <td className="font-bold">{product?.price ?? "$99.99"}</td>
      <td>
        <div className="flex justify-between text-2xl">
          <button onClick={reduceQuantity} className="flex-1">-</button>{item?.quantity}
          <button onClick={updateProductQuantity} className="flex-1">+</button>
        </div>
      </td>
      <td className="font-bold">{item?.total ?? "$99.99"}</td>
      <td>
        <button onClick={() => deleteCartItem(product.id)}>
          <FontAwesomeIcon icon={faTimes} style={{ width: 20 }} />
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
