import * as Yup from "yup";
const phoneRegExp =  /^([+]\d{2})?\d{10}$/

export const validationSchema = Yup.object({
    fullName: Yup.string().required("Please enter your full name"),
    email: Yup.string().required("Please enter your Email ID").email('Please enter valid Email'),
    password: Yup.string().required('Please enter Password'),
    number: Yup.string().required("Please enter your Mobile number").matches(phoneRegExp, 'Mobile number is not valid'),
  });