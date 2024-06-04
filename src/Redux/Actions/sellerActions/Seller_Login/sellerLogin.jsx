import { SELLER_LOGIN_SUCCESS,SELLER_LOGIN_FAILURE,SELLER_LOGIN_PENDING } from "./sellerLoginType";
import axios from "axios";

export const sellerLogin = (formData) => async (dispatch) => {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDkzMjk2NDEsImV4cCI6MTY0OTMzMzI0MSwiYXVkIjoiNjI0ZDM3ODUwMmJhYmFhODEyMzE3MTI3IiwiaXNzIjoic291cmFiaEBnbWFpbC5jb20ifQ.hRWi9UPj01-tZq7kNaZpa-7QzTlTtUZRBTl2Feve864'
  await dispatch({ type: SELLER_LOGIN_PENDING, payload: true }) 
  await axios
    .post("https://purple-mole-82.loca.lt/auth/admin/login",formData)
    .then(async(res) => {
        console.log(res);
        console.log("Seller Login");
      localStorage.setItem('Token',token)
      await dispatch({ type: SELLER_LOGIN_SUCCESS, payload: res.data });
      await dispatch({ type: SELLER_LOGIN_PENDING, payload: false });
    })
    .catch( async(error) => {
      console.log("Error>>", error);
      await dispatch({ type: SELLER_LOGIN_FAILURE, payload: error });
      await dispatch({ type: SELLER_LOGIN_PENDING, payload: false });
})
}
