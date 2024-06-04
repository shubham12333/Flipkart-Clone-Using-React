import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_PENDING
} from "../../Actions/user_Login/userLogin";

const initialState = {
  userData: [],
  error: "",
  pending : false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        userData: action.payload,
      };
    case LOGIN_FAILURE:
       state.error = action.payload
      return {
          ...state,
        error: action.payload,  
      };
    case LOGIN_PENDING:
      return {
          ...state,
        pending: action.payload,
      };

    default:
      return state;
  }
};
export default userReducer;
