import "@progress/kendo-theme-default/dist/all.css";
import "../src/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastProvider } from "react-toast-notifications";
import BaseWrapper from "components/Layouts/BaseWrapper";
import { ProductsContextProvider } from "context/products/productsContext";
import { CartContextProvider } from "context/cart/cartContext";
import { OrderContextProvider } from "context/orders/orderContext";
import { PaymentsContextProvider } from "context/payments/paymentsContext";
import { QueryClient, QueryClientProvider } from "react-query";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <ToastProvider>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </ToastProvider>
  );
}
