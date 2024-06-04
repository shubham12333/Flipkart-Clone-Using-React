import axios from "axios";
import { SELLER_REGISTER } from "./sellerRegisterType";
export const sellerRegister = (formData) => async (dispatch) => {
  const { fullName, email, phone, password } = formData;

  await axios
    .post(`https://brown-stingray-11.loca.lt/auth/seller/register`, {
      fullName,
      email,
      phone,
      password,
    })
    .then(async(res) => {
      console.log(res);
      console.log("Seller Register");
       await dispatch({ type: SELLER_REGISTER, payload: res });
    });
     
};
