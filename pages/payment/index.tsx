import React, { useContext, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { v4 as uuidV4 } from "uuid";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import om from "../../assets/om.jpeg";
import momo from "../../assets/momo.jpeg";
import { cartContext } from "../../context/cart/cartContext";
import { paymentsContext } from "../../context/payments/paymentsContext";
import { CartItem } from "../../types/cart";
import generatePDF from "../../services/files/generateInvoice";

const Payment = () => {
  const router = useRouter();
  const { cart, contact, onFormChange } = useContext(cartContext);
  const { createPayment } = useContext(paymentsContext);
  // const { contact, onChangeForm } = useContext(contactContext)
  const [number, setNumber] = useState(contact?.phone);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onFormChange({ ...contact, phone: number });
    createPayment({
      amount: cart.reduce(
        (a: number, b: CartItem) => Number(a) + Number(b.total),
        0
      ),
      currency: "XAF",
      transactionId: uuidV4(),
      payer: number,
      createAt: new Date(),
    });
    // generatePDF(cart)
    router.push("/thankyou");
  };

  const pdfExportComponent: any = React.useRef(null);

  function exportPDFWithComponent() {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };

  return (
    <div>
        <div className="px-8">
          {/* <h2 className="text-center text-xl font-bold mb-8">Payment</h2> */}
          <h3 className="font-bold text-base mb-4">Deliver to</h3>
          <div className="border rounded-lg p-4 mb-4">
            <p className="text-yellow-500 text-sm">
              {contact?.address ?? "Nkolbisson, Yaounde"}
            </p>
            <div className="flex">
              <p className="text-sm mr-2">
                {contact?.point ?? "Entree, Gendamerie"}
              </p>
              <p className="text-sm">{`${contact?.firstName ?? ""}, ${
                contact?.phone ?? ""
              }`}</p>
            </div>
          </div>
          <h2 className="text-sm mb-4">
            Pay with Orange Money or Mobile Money
          </h2>
          <div className="flex mb-4">
            <input
              className="border-b flex-1 text-sm px-2"
              type="text"
              value={number}
              onChange={(e: any) => setNumber(e.target.value)}
              placeholder="please enter a mobile money number"
            />
            <div className="h-20">
              <Image className="h-full w-auto" src={om} alt="om logo" />
            </div>
          </div>
          <h2 className="font-bold text-base mb-2">Order Summary</h2>
          <div className="mb-8">
            {cart.map((item: CartItem, i: number) => (
              <div className="flex justify-between text-sm mb-1" key={i}>
                <div>{item.product.name}</div>
                <div>{item.total} XAF</div>
              </div>
            ))}
            <div className="flex justify-between font-bold">
              <div>TOTAL</div>
              <div>
                {cart.reduce(
                  (a: number, b: CartItem) => Number(a) + Number(b.total),
                  0
                ) ?? "$189.00"}{" "}
                XAF
              </div>
            </div>
          </div>
        </div>
      <div
        onClick={handleSubmit}
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
