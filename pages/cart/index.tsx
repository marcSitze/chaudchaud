import React, { useEffect, useContext} from "react";
import { faTimes, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Styles.module.css";
import rStyles from './Responsive.module.css'
import CartItem from "../../components/CartItem";
import { productsContext } from '../../context/products/productsContext';
import { cartContext } from "../../context/cart/cartContext";
import { Product } from "../../types/products";
import { CartItem as ICartItem } from "../../types/cart";

const Cart = () => {
  const { products } = useContext(productsContext);
  const { cart } = useContext(cartContext)

  console.log('cart: ', cart)
  useEffect(() => {
    // console.log('cart: ', cart)
  }, [cart])

  return (
    <div className={`${styles.container} ${rStyles.container} flex`}>
      <div className="w-2/3">
        <table className="d-none">
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
            {cart.map((item: ICartItem) => <CartItem item={item} key={item.product.id} />)}
          </tbody>
        </table>
      </div>
      <div className={`w-1/3 bg-primary ${styles.cartTotal}`}>
        <h3 className="text-2xl font-bold mb-4">CART TOTAL: <span className="ml-4">{cart.reduce((a:number, b: ICartItem) => Number(a) + Number(b.total), 0) ?? "$189.00"}</span></h3>
        <p className="text-lg mb-14">Shipping calculated at checkout</p>

        <div className="flex mb-10">
          <input type={"checkbox"} />
          <p className="text-base ml-2">I agree to terms and conditions</p>
        </div>
        <div>
          <button className="text-lg font-bold bg-black text-white py-2 px-4 rounded-full">Checkout <FontAwesomeIcon icon={faLock} style={{width: 25, marginLeft: 10}} /></button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
