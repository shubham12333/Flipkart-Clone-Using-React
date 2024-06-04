import { LOGIN_SUCCESS,LOGIN_FAILURE,LOGIN_PENDING } from "./userLogin";
import { openModal } from "../modal_Action/action";
import axios from "axios";

export const loginUser = (formData) => async (dispatch) => {
  await dispatch({ type: LOGIN_PENDING, payload: true }) 
  await axios
    .post("https://chilly-monkey-27.loca.lt/api/user_login",formData)
    .then(async(res) => {
      localStorage.setItem("User Login Token",res.data.data.token)
      await dispatch({ type: LOGIN_SUCCESS, payload: res.data.data });
      await dispatch({ type: LOGIN_PENDING, payload: false });
      await dispatch(openModal(false));
    })
    .catch( async(error) => {
      console.log("Error>>", error);
      await dispatch({ type: LOGIN_FAILURE, payload: error });
      await dispatch({ type: LOGIN_PENDING, payload: false });
})
}
