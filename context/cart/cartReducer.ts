import { CartItem } from "../../types/cart";
import * as types from "./types";

function CartReducer(state: any, action: any) {
  switch (action.type) {
    case types.ADD_TO_CART:
      let toAddItems = [...state.cart];
      // console.log("action: ", action);
      // const find = toAddItems.filter(
      //   (item) => String(item.product.id) === String(action.payload.id)
      // );
      // console.log("find: ", find);
      // toAddItems.forEach((item, index) => {
      //   console.log('item: ', item)
      //   console.log(String(item.product.id) === String(action.payload.id));
      //   // if (String(item.product.id) === String(action.payload.id)) {
      //   //   console.log("ifside");
      //   //   let currentCartItem = toAddItems[index];
      //   //   currentCartItem.quantity = currentCartItem.quantity + 1;
      //   //   currentCartItem.total =
      //   //     currentCartItem.product.price * currentCartItem.quantity;
      //   //   toAddItems[index] = currentCartItem;
      //   //   return;
      //   // } else {
      //   //   console.log("elseSide");
      //   //   let itemToAdd = {
      //   //     product: action.payload,
      //   //     quantity: 1,
      //   //     total: action.payload.price,
      //   //   };
      //   //   toAddItems = [...state.cart, itemToAdd];
      //   // }
      // });

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
    default:
      return state;
  }
}

export default CartReducer;
