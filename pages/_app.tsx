import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ToastProvider } from "react-toast-notifications";
import BaseWrapper from "../components/Layouts/BaseWrapper";
import { ProductsContextProvider } from "../context/products/productsContext";
import { CartContextProvider } from "../context/cart/cartContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ToastProvider>
      <ProductsContextProvider>
        <CartContextProvider>
          <BaseWrapper>
            <Component {...pageProps} />
          </BaseWrapper>
        </CartContextProvider>
      </ProductsContextProvider>
    </ToastProvider>
  );
}
