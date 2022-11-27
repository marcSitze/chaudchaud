import React, { createContext, useReducer } from "react";
import { useToasts } from 'react-toast-notifications'
import { Product } from "../../types/products";
import CartReducer from "./cartReducer";
import * as types from './types'
import { CartItem as ICartItem } from "../../types/cart";

const INITIAL_STATE: any = {
  cart: []
}

export const cartContext = createContext(INITIAL_STATE)

export const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(CartReducer, INITIAL_STATE)
  const { addToast } = useToasts()

  function addToCart(item: Product) {
    const find = state.cart.find((i: ICartItem) => i.product.id === item.id)
    if(find) {
      console.log('find: ', find)
      addToast('quantity updated', { appearance: 'success', autoDismiss: true, autoDismissTimeout: 2000})
      return dispatch({
        type: types.UPDATE_QUANTITY,
        payload: { id: find.product.id, quantity: find.quantity + 1 }
      })
    }
    dispatch({
      type: types.ADD_TO_CART,
      payload: item
    })
    addToast('item added successfully to cart', { appearance: 'success', autoDismiss: true, autoDismissTimeout: 2000})
  }

  function deleteCartItem(id: string) {
    dispatch({
      type: types.DELETE_CART_ITEM,
      payload: id
    })
    addToast('item removed from cart', { appearance: 'error', autoDismiss: true, autoDismissTimeout: 2000})
  }
  function updateQuantity(id: string, quantity: number) {

    dispatch({
      type: types.UPDATE_QUANTITY,
      payload: { id, quantity}
    })
  }
  return (
    <cartContext.Provider value={{
      cart: state.cart,
      addToCart,
      deleteCartItem,
      updateQuantity,
    }}>
      {children}
    </cartContext.Provider>
  )
}