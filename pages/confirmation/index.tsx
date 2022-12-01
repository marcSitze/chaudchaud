import React, { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./Styles.module.css";
import CartItemMobile from "../../components/CartItemMobile";
import { cartContext } from "../../context/cart/cartContext";
import { CartItem as ICartItem } from "../../types/cart";

const Confirmation = () => {
  const router = useRouter();
  const { cart, contact } = useContext(cartContext);
  // const { contact } = useContext(contactContext)

  return (
    <div>
      <div className="px-4">
        <div className="flex justify-between items-center pb-8 border-b">
          <div>
            <h2 className="text-sm my-2">Shipping to:</h2>
            <p className="text-base">{contact?.firstName ?? "John Smith"}</p>
            <p className="text-base">{contact.address ?? "Nkolbisson, yaounde"}</p>
          </div>
          <div>
            <Link href='/checkout' className="text-sm font-bold text-blue-500">EDIT</Link>
          </div>
        </div>
        <h3 className="text-base font-bold my-2">YOUR ORDER</h3>
        {/* cart items */}
        <div className={styles.checkoutWrapper}>
          <div className={`${styles.mobileCartWrapper} flex flex-col mb-10`}>
            {cart.map((item: ICartItem, index: number) => (
              <CartItemMobile item={item} key={index} />
            ))}
          </div>
          {/* {cart.length ? (
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
          ): null} */}
        </div>
        <div className="flex justify-between mb-4">
          <h3 className="text-base font-bold">TOTAL AMOUNT</h3>
          <h3 className="text-base font-bold">
            {cart.reduce(
              (a: number, b: ICartItem) => Number(a) + Number(b.total),
              0
            ) ?? "$189.00"}{" "}XAF
          </h3>
        </div>
      </div>
      <div
        onClick={() => router.push("/payment")}
        className="flex w-full bg-primary justify-between items-center my-2"
      >
        <span></span>
        <button className="text-base font-bold self-center text-white py-3">
          CONFIRM & PAY
        </button>
        <FontAwesomeIcon
          className="text-white text-base pr-2"
          icon={faArrowRight}
          style={{ width: 25 }}
        />
      </div>
      <Link className="px-4" href={"/shop"}>
        Continue shopping ?
      </Link>
    </div>
  );
};

export default Confirmation;
