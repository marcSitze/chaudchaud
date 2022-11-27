import React from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Checkout = () => {
  const router = useRouter()
  return (
    <div>
      <h2 className="px-8 mb-4 text-xl font-bold">Shipping informations</h2>
      <form className="px-8 mb-8">
        <div className="flex my-2">
          <label className="text-sm w-1/3">First Name: </label>
          <input className="flex-1 border-b" type="text" />
        </div>
        <div className="flex my-2">
          <label className="text-sm w-1/3">Last Name: </label>
          <input className="flex-1 border-b" type="text" />
        </div>
        <div className="flex my-2">
          <label className="text-sm w-1/3">Phone Number: </label>
          <input className="flex-1 border-b" type="text" />
        </div>
        <div className="flex my-2">
          <label className="text-sm w-1/3">Email Address: </label>
          <input className="flex-1 border-b" type="text" />
        </div>
        <div className="flex my-2">
          <label className="text-sm w-1/3">Address: </label>
          <input className="flex-1 border-b" type="text" />
        </div>
        <div className="flex mt-2 mb-8">
          <label className="text-sm w-1/3">Point de repere: </label>
          <input className="flex-1 border-b" type="text" />
        </div>
        <div className="flex mt-2 mb-8">
          <label className="text-sm w-1/3">City: </label>
          <input className="flex-1 border-b" type="text" />
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
