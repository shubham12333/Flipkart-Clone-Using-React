import { APPROVE_SUCCESS,APPROVE_FAILURE,APPROVE_PENDING } from "../Action/adminActionTypes";
const initialState = {
  pending : false
};

const adminActionReducer = (state = initialState, action) => {
  switch (action.type) {
    case APPROVE_SUCCESS:
      return {
        ...state,
        userData: action.payload,
      };
    case APPROVE_FAILURE:
       state.error = action.payload
      return {
          ...state,
        error: action.payload,  
      };
    case APPROVE_PENDING:
      return {
          ...state,
        pending: action.payload,
      };

    default:
      return state;
  }
};
export default adminActionReducer;
