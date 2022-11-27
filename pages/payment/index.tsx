import React, { useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import om from "../../assets/om.jpeg";
import momo from "../../assets/momo.jpeg";
import { cartContext } from "../../context/cart/cartContext";
import { CartItem } from "../../types/cart";

const Payment = () => {
  const router = useRouter();
  const { cart } = useContext(cartContext);

  return (
    <div>
      <div className="px-8">
        {/* <h2 className="text-center text-xl font-bold mb-8">Payment</h2> */}
        <h3 className="font-bold text-base mb-4">Deliver to</h3>
        <div className="border rounded-lg p-4 mb-4">
          <p className="text-yellow-500 text-sm">Nkolbisson, Yaounde</p>
          <div className="flex">
            <p className="text-sm">Entree, Gendamerie</p>
            <p className="text-sm">John Smith, 6752089334</p>
          </div>
        </div>
        <h2 className="text-sm mb-4">Pay with Orange Money or Mobile Money</h2>
        <div className="flex mb-4">
          <input
            className="border-b flex-1 text-sm px-2"
            type="text"
            placeholder="please enter a mobile money number"
          />
          <div className="w-1/6">
            <Image src={om} alt="om logo" />
          </div>
        </div>
        <h2 className="font-bold text-base mb-2">Order Summary</h2>
        <div className="mb-8">
          {cart.map((item: CartItem, i: number) => (
            <div className="flex justify-between text-sm mb-1" key={i}>
              <div>{item.product.name}</div>
              <div>{item.total}{" "}XAF</div>
            </div>
          ))}
          <div className="flex justify-between font-bold">
            <div>TOTAL</div>
            <div>
              {cart.reduce(
                (a: number, b: CartItem) => Number(a) + Number(b.total),
                0
              ) ?? "$189.00"}{" "}XAF
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => router.push("/thankyou")}
        className="flex w-full bg-primary justify-center items-center my-2"
      >
        <button className="text-base font-bold self-center text-white py-3">
          PAY NOW
        </button>
      </div>
    </div>
  );
};

export default Payment;
