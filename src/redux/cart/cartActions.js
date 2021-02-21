import { cartActionTypes } from "./cartActionTypes";

export const toggleCart = () => {
  return {
    type: cartActionTypes.TOGGLE_CART,
  };
};

export const addItem = (item) => {
  return {
    type: cartActionTypes.ADD_ITEM,
    payload: item
  }
}
