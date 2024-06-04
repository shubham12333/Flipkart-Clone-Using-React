import { Product_Details } from "../../../Pages/Product Details/Product_Details";
import { FETCH_SUCCESS } from "./getProductType";
import axios from "axios";

export const getProductDetails = () => async (dispatch) => {
  await dispatch({ type: FETCH_SUCCESS, payload: true });
  await axios.get(
    "http://localhost:5000/api/v1/products/product"
  ).then(async(response)=>{
  await dispatch({ type: Product_Details, payload: response?.data?.data });
  await dispatch({ type: FETCH_SUCCESS, payload: false });
  })
};
