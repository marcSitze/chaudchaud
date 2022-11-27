import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { faShippingFast, faStar, faMoneyBill, faCheckCircle, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Styles.module.css";
import rStyles from './Responsive.module.css'
import logo from "../../../assets/logoPrimary.png";
import { cartContext } from "../../../context/cart/cartContext";

const Navbar = () => {
  const { cart } = useContext(cartContext)

  return (
    <div className={`${styles.container} ${rStyles.container}`}>
      <div className="flex items-center justify-between">
        <div className={`${styles.logoWrapper} ${rStyles.logoWrapper}`}>
          <Link href='/'><Image src={logo} alt="logo primary" /></Link>
        </div>
        <div className="flex items-center">
          <span className={`${styles.navItem} font-bold text-sm sm:text-xl mr-6`}><Link href="/about">About</Link></span>
          <span className={`${styles.navItem} font-bold text-sm sm:text-xl mr-6`}><Link href="/shop">Shop</Link></span>
          <span className={`${styles.navItem} font-bold text-sm sm:text-xl mr-6`}><Link href="/cart"><span><FontAwesomeIcon style={{ width: 25}} icon={faCartShopping} /></span><span>{`(${cart.length})`}</span></Link></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
