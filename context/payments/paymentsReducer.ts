import * as types from "./types";

const PaymentsReducer = (state: any, action: any) => {
  switch (action.types) {
    case types.CREATE_PAYMENT_REQUEST:
      return {
        ...state,
        paying: true,
      };
    case types.CREATE_PAYMENT_FAILURE:
      return {
        ...state,
        paying: false,
      };
    case types.CREATE_PAYMENT_FAILURE:
      return {
        ...state,
        paying: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default PaymentsReducer;
