import * as Yup from "yup";
const phoneRegExp =  /^([+]\d{2})?\d{10}$/

export const validationSchema = Yup.object({
    fullName: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
    number: Yup.string().required("Required").matches(phoneRegExp, 'Phone number is not valid'),
    pincode: Yup.string().required("Required"),
    houseNo: Yup.string().required("Required"),
    street: Yup.string().required("Required"),
    landmark: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    state: Yup.string().required("Required"),
    addressType: Yup.string().required("Required"),
  });