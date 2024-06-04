import { OPEN_LOGIN_MODEL,OPEN_SIGNUP_MODEL} from "./actonType";
export const openModal = (data) => {
  return {
    type: OPEN_LOGIN_MODEL,
    status : data
  };
};
export const signupModal = (data) => {
  return {
    type: OPEN_SIGNUP_MODEL,
    status : data
  };
};