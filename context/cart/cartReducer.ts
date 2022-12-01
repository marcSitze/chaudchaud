import { CartItem } from "../../types/cart";
import * as types from "./types";

function CartReducer(state: any, action: any) {
  switch (action.type) {
    case types.ADD_TO_CART:
      let toAddItems = [...state.cart];
      let cartItem = {
        product: action.payload,
        quantity: 1,
        total: action.payload.price,
      };
      toAddItems = [...state.cart, cartItem];

      return {
        ...state,
        cart: toAddItems,
      };
    case types.DELETE_CART_ITEM:
      let newItems = [...state.cart];
      return {
        ...state,
        cart: newItems.filter((item) => item.product.id !== action.payload),
      };
    case types.UPDATE_QUANTITY:
      let updatedCartItems = [...state.cart];
      updatedCartItems.map((item, index) => {
        if (String(item.product.id) === String(action.payload.id)) {
          let currentItem = updatedCartItems[index];
          currentItem.quantity = action.payload.quantity;
          currentItem.total =
            currentItem.product.price * action.payload.quantity;
          updatedCartItems[index] = currentItem;
        }
      });
      return {
        ...state,
        cart: updatedCartItems,
      };
    case types.FORM_CHANGE:
      return {
        ...state,
        contact: action.payload
      }
    default:
      return state;
  }
}

export default CartReducer;
