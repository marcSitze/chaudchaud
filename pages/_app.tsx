import '@progress/kendo-theme-default/dist/all.css';
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ToastProvider } from "react-toast-notifications";
import BaseWrapper from "../components/Layouts/BaseWrapper";
import { ProductsContextProvider } from "../context/products/productsContext";
import { CartContextProvider } from "../context/cart/cartContext";
import { OrderContextProvider } from "../context/orders/orderContext";
import { PaymentsContextProvider } from "../context/payments/paymentsContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ToastProvider>
      <ProductsContextProvider>
        <CartContextProvider>
          <OrderContextProvider>
            <PaymentsContextProvider>
              <BaseWrapper>
                <Component {...pageProps} />
              </BaseWrapper>
            </PaymentsContextProvider>
          </OrderContextProvider>
        </CartContextProvider>
      </ProductsContextProvider>
    </ToastProvider>
  );
}
