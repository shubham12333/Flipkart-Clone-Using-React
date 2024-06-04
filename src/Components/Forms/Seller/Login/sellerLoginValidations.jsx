import * as Yup from "yup";
const phoneRegExp =  /^([+]\d{2})?\d{10}$/

export const sellerloginValidations = Yup.object({
    email: Yup.string().required("Please enter your Email ID").email('Please enter valid Email'),
    password: Yup.string().required('Please enter Password'),
  });