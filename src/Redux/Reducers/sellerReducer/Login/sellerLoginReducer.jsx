import { SELLER_LOGIN_PENDING,SELLER_LOGIN_SUCCESS,SELLER_LOGIN_FAILURE } from "../../../Actions/sellerActions/Seller_Login/sellerLoginType";


const initialState = {
  sellerData: [],
  error: "",
  pending : false
};

const sellerLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELLER_LOGIN_SUCCESS:
      return {
        ...state,
        userData: action.payload,
      };
    case SELLER_LOGIN_FAILURE:
       state.error = action.payload
      return {
          ...state,
        error: action.payload,  
      };
    case SELLER_LOGIN_PENDING:
      return {
          ...state,
        pending: action.payload,
      };

    default:
      return state;
  }
};
export default sellerLoginReducer;
