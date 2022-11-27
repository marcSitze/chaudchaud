import React, { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { faTimes, faLock, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Styles.module.css";
import rStyles from "./Responsive.module.css";
import CartItem from "../../components/CartItem";
import CartItemMobile from "../../components/CartItemMobile";
import { productsContext } from "../../context/products/productsContext";
import { cartContext } from "../../context/cart/cartContext";
import { Product } from "../../types/products";
import { CartItem as ICartItem } from "../../types/cart";
import img from "../../assets/shirts/1.jpeg";
import Link from "next/link";

const Cart = () => {
  const router = useRouter()
  const { products } = useContext(productsContext);
  const { cart } = useContext(cartContext);

  console.log("cart: ", cart);
  useEffect(() => {
    // console.log('cart: ', cart)
  }, [cart]);

  return (
    <div className={rStyles.wrapper}>
      <div className={`${styles.container} ${rStyles.container} flex`}>
        <div className="w-2/3 hidden sm:block">
          <table className="">
            <thead>
              <tr className="text-xl">
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item: ICartItem) => (
                <CartItem item={item} key={item.product.id} />
              ))}
            </tbody>
          </table>
        </div>
        <div className={`w-1/3 bg-primary ${styles.cartTotal} hidden sm:block`}>
          <h3 className="text-2xl font-bold mb-4">
            CART TOTAL:{" "}
            <span className="ml-4">
              {cart.reduce(
                (a: number, b: ICartItem) => Number(a) + Number(b.total),
                0
              ) ?? "$189.00"}
            </span>
          </h3>
          <p className="text-lg mb-14">Shipping calculated at checkout</p>

          <div className="flex mb-10">
            <input type={"checkbox"} />
            <p className="text-base ml-2">I agree to terms and conditions</p>
          </div>
          <div>
            <button className="text-lg font-bold bg-black text-white py-2 px-4 rounded-full">
              Checkout{" "}
              <FontAwesomeIcon
                icon={faLock}
                style={{ width: 25, marginLeft: 10 }}
              />
            </button>
          </div>
        </div>
      </div>
        <div className={styles.checkoutWrapper}>
          <div className={`${styles.mobileCartWrapper} flex flex-col mb-10`}>
            {cart.map((item: ICartItem, index: number) => (
              <CartItemMobile item={item} key={index} />
            ))}
          </div>
          {cart.length ? (
            <div className="sm:hidden">
              <button onClick={() => router.push('/checkout')} className="text-white text-base font-bold py-3 w-full bg-primary">
                Checkout{" "}
                <span className="ml-4">
                  {cart.reduce(
                    (a: number, b: ICartItem) => Number(a) + Number(b.total),
                    0
                  ) ?? "$189.00"}{" "}
                  XAF
                </span>
              </button>
            </div>
          ): null}
          <Link href={'/shop'}>Continue shopping ?</Link>
        </div>
    </div>
  );
};

export default Cart;
