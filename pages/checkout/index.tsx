import React from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from './Styles.module.css'
import rStyles from './Responsive.module.css'

const Checkout = () => {
  const router = useRouter()
  return (
    <div className={`${styles.container} ${rStyles.container}`}>
      <h2 className="px-2 mb-4 text-xl font-bold">Shipping informations</h2>
      <form className="px-2 mb-8">
        <div className="flex my-2">
          <label className="text-sm w-1/3 sm:text-base">First Name: </label>
          <input className="flex-1 border-b sm:text-base" type="text" />
        </div>
        <div className="flex my-2">
          <label className="text-sm w-1/3 sm:text-base">Last Name: </label>
          <input className="flex-1 border-b sm:text-base" type="text" />
        </div>
        <div className="flex my-2">
          <label className="text-sm w-1/3 sm:text-base">Phone: </label>
          <input className="flex-1 border-b sm:text-base" type="text" />
        </div>
        <div className="flex my-2">
          <label className="text-sm w-1/3 sm:text-base">Email: </label>
          <input className="flex-1 border-b sm:text-base" type="text" />
        </div>
        <div className="flex my-2">
          <label className="text-sm w-1/3 sm:text-base">Address: </label>
          <input className="flex-1 border-b sm:text-base" type="text" />
        </div>
        <div className="flex my-2">
          <label className="text-sm w-1/3 sm:text-base">Point of contact: </label>
          <input className="flex-1 border-b sm:text-base" type="text" />
        </div>
        <div className="flex mt-2 mb-8">
          <label className="text-sm w-1/3 sm:text-base">City: </label>
          <input className="flex-1 border-b sm:text-base" type="text" />
        </div>
        <div className="flex justify-between">
          <p className="text-sm">Save for future purchases?</p>
          <input type={"checkbox"} />
        </div>
      </form>
      <div onClick={() => router.push('/confirmation')} className="flex w-full bg-primary justify-between items-center my-2">
        <span></span>
        <button className="text-base font-bold self-center text-white py-3">CONTINUE TO PAYMENT</button>
        <FontAwesomeIcon className="text-white text-base pr-2" icon={faArrowRight} style={{width: 25}} />
      </div>
    </div>
  );
};

export default Checkout;
