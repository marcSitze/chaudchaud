import React, { createContext, useReducer } from "react";
import { useToasts } from 'react-toast-notifications'
import { IContact } from "../../types/contact";
import { Order as IOrder } from "../../types/order";
import OrderReducer from "./orderReducer";
import * as types from "./types";
import { createOrder as createOrderService } from "../../services/orders";
import generatePDF from "../../services/files/generateInvoice";

const INITIAL_STATE: any = {
  orders: [],
  creating: false
}

export const orderContext = createContext(INITIAL_STATE)

export const OrderContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { addToast } = useToasts()
  const [state, dispatch] = useReducer(OrderReducer, INITIAL_STATE)

  async function createOrder(order: IOrder) {
    console.log('FORMCHANGE: ', order)
    dispatch({
      type: types.CREATE_ORDER_REQUEST,
    })

    const data: any = await createOrderService(order)
    if(data) {
      dispatch({
        type: types.CREATE_ORDER_SUCCESS
      })
      addToast('Order created successfully...', { appearance: 'success', autoDismiss: true, autoDismissTimeout: 2000})
      generatePDF(order)
    }else{
      dispatch({
        type: types.CREATE_ORDER_FAILURE
      })
      addToast('Unable to place the order', { appearance: 'error', autoDismiss: true, autoDismissTimeout: 2000})
    }

  }


  return (
    <orderContext.Provider value={{
      createOrder,
      creating: state.creating
      // onFormChange,
      // test,
      // contact: state.contact
    }}>
      {children}
    </orderContext.Provider>
  )
}