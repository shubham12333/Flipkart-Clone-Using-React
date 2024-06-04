import { ADD_TO_CART, DECREMENT, DELETE_FROM_CART, INCREMENT,PRODUCT_ID } from "./cartActionType";
export const AddToCart = (data) => {
  return {
    type: ADD_TO_CART,
    payload: data,
  };
};
export const DeleteFromCart = (id) => {
  return {
    type: DELETE_FROM_CART,
    payload: id,
  };
};
export const increment= (id) => {
  return {
    type: INCREMENT,
    payload: id,
  };
};
export const decrement = (id) => {
  return {
    type: DECREMENT,
    payload: id,
  };
};

