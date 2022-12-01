import React, { useContext, useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import { orderContext } from "../../context/orders/orderContext";
import { paymentsContext } from "../../context/payments/paymentsContext";
import Spinner from '../../assets/spinner.gif'

const ThankYou = () => {
  const { creating } = useContext(orderContext)
  const { paying } = useContext(paymentsContext)
  useEffect(() => {

    console.log('creating: ', creating)
    console.log('paying: ', paying)
  }, [creating, paying])
  return (
    <div className="text-center ">
      {(creating || paying) && <div className="flex justify-center">
        <Image src={Spinner} alt="spinner"/>
      </div>}
      {paying && <h2 className="font-bold text-lg mb-2">Processing your payment...</h2>}
      {(!creating && !paying) && <h2 className="font-bold text-lg mb-2">Thank You for ordering at chaud chaud</h2>}
      <Link className="text-base text-secondary" href={'/shop'}>Continue Shopping</Link>
    </div>
  );
};

export default ThankYou;
