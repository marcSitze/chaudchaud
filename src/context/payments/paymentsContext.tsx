import React, { createContext, useReducer, useContext} from "react";
import { useToasts } from 'react-toast-notifications'
import * as types from './types'
import PaymentsReducer from "./paymentsReducer";
import { createPayment as createPaymentService } from "../../services/payments";
import { IPayment } from "../../types/payment";
import { orderContext } from '../orders/orderContext'
import { cartContext } from "../cart/cartContext";

const INITIAL_STATE: any = {
  paymentData: {},
  paying: false
}

export const paymentsContext = createContext(INITIAL_STATE)

export const PaymentsContextProvider = ({ children }: { children: React.ReactNode}) => {
  const { addToast } = useToasts()
  const [state, dispatch] = useReducer(PaymentsReducer, INITIAL_STATE)
  const { createOrder } = useContext(orderContext);
  const { cart, contact } = useContext(cartContext);

  async function createPayment(payment: IPayment) {
    dispatch({
      type: types.CREATE_PAYMENT_REQUEST
    })

    const data: any = await createPaymentService(payment)
    console.log('paymentData: ', data);
    if(data) {
      dispatch({
        type: types.CREATE_PAYMENT_SUCCESS,
        payload: data
      })
      addToast('Payment success', { appearance: 'success', autoDismiss: true, autoDismissTimeout: 2000})
      createOrder({
        cart,
        contact,
        payment: data,
        createdAt: new Date()
      })
    }else{
      dispatch({
        type: types.CREATE_PAYMENT_FAILURE,
        payload: payment
      })
      addToast('Payment error', { appearance: 'error', autoDismiss: true, autoDismissTimeout: 2000})
    }

  }

  return (
    <paymentsContext.Provider value={{
      createPayment,
      paying: state.paying
    }}>
      {children}
    </paymentsContext.Provider>
  )
}