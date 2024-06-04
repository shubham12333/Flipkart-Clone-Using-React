import { SELLER_LIST,FETCH_PENDING,FETCH_FAIL } from "../Action/sellerListType"
const initialState = {
  sellerList: [],
  error: "",
  pending : false
};

const sellerListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELLER_LIST:
      return {
        ...state,
        sellerList: action.payload,
      };
    case FETCH_FAIL:
       state.error = action.payload
      return {
          ...state,
        error: action.payload,  
      };
    case FETCH_PENDING:
      return {
          ...state,
        pending: action.payload,
      };

    default:
      return state;
  }
};
export default sellerListReducer;
