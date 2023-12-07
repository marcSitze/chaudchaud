import * as types from "./types";

const OrderReducer = (state: any, action:any) => {
  switch(action.type) {
    case types.CREATE_ORDER_REQUEST:
      return {
        ...state,
        creating: true
      }
      case types.CREATE_ORDER_SUCCESS:
      return {
        ...state,
        creating: false
      }
      case types.CREATE_ORDER_FAILURE:
      return {
        ...state,
        creating: false
      }
    default:
      return state
  }
}

export default OrderReducer;