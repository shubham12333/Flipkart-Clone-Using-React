import * as Yup from "yup";
export const validations = Yup.object({
  email: Yup.string().required("Please enter valid Email ID/Mobile number"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be minimum of 8 characters"),
});
