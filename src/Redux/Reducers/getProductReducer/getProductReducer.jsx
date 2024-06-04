import { Product_Details } from "../../../Pages/Product Details/Product_Details";
import { FETCH_SUCCESS } from "../../Actions/getProduct/getProductType";

const initialState = {
  productData: [],
  success: false,
};

const getProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case Product_Details:
      return {
        ...state,
        productData: action.payload,
      };
    case FETCH_SUCCESS:
      
      return {
        ...state,
        success: action.payload,
      };
    default:
      return state;
  }
};
export default getProductReducer;
