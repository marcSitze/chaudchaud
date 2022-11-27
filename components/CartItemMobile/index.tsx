import React, { useState, useEffect, useContext} from 'react'
import Image from 'next/image'
import { faTimes, faLock, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './Styles.module.css'
import img from '../../assets/shirts/1.jpeg'
import { CartItem } from '../../types/cart';
import { cartContext } from "../../context/cart/cartContext";

const CartItemMobile = ({ item }: { item: CartItem}) => {
  const { product } = item;
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
    <div className="sm:hidden p-8 my-2">
        <div className="flex h-20">
          <div className="w-1/4 pr-2 overflow-hidden">
            <Image src={product?.image ?? img} alt="cart image" />
          </div>
          <div className="flex flex-1 flex-col justify-between">
            <div className="flex flex-1 justify-between">
              <h3 className="text-base">{product?.name ?? "T-shirt longues manches"}</h3>
              <button onClick={() => deleteCartItem(product.id)} className={`${styles.rmBtn} bg-red-500 text-white`}>
                <FontAwesomeIcon
                  icon={faMinus}
                  style={{ width: 25, height: 20 }}
                />
              </button>
            </div>
            <p className="text-sm">Large</p>
            <p className="text-sm">Color: red</p>
            <div className="flex justify-between items-center">
              <p className="text-sm font-bold">{item?.total ?? "2000 XAF"}{" "}XAF</p>
              <div className="flex justify-between items-center text-2xl">
                <button onClick={reduceQuantity} className="flex-1 px-3">-</button>
                <span className="px-2 text-base">{item?.quantity}</span>
                <button onClick={updateProductQuantity} className="flex-1 px-3">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default CartItemMobile