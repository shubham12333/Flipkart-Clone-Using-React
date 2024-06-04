import { OPEN_LOGIN_MODEL,OPEN_SIGNUP_MODEL } from "../../Actions/modal_Action/actonType";

const initialState = {
  LoginmodalStatus: false,
  SignUpmodalStatus: false,
  AfterLogin: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_LOGIN_MODEL:
      return {
        ...state,
        LoginmodalStatus: action.status,
      };
    case OPEN_SIGNUP_MODEL:
      return {
        ...state,
        SignUpmodalStatus: action.status,
      };
    default:
      return state;
  }
};
export default reducer;
