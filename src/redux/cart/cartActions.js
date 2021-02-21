import { cartActionTypes } from "./cartActionTypes";

export const toggleCart = () => {
  return {
    type: cartActionTypes.TOGGLE_CART,
  };
};
