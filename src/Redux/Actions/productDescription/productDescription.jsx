import { PRODUCT_ID } from "./productType";
export const ProductID = (id) => {
  return {
    type: PRODUCT_ID,
    payload: id,
   
  };
};