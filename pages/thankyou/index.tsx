import React from "react";
import Link from "next/link";

const ThankYou = () => {
  return (
    <div className="text-center ">
      <h2 className="font-bold text-lg mb-2">Thank You for ordering at chaud chaud</h2>
      <Link href={'/shop'}>Continue Shopping</Link>
    </div>
  );
};

export default ThankYou;
