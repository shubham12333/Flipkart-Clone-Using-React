import * as Yup from "yup";

export const productValidationSchema = Yup.object({
  productName: Yup.string().required("Required"),
  deatil: Yup.string().required("Required"),
  category_id: Yup.string().required("Required"),
  brand_id: Yup.string().required("Required"),
  createdBy: Yup.string().required("Required"),
  price: Yup.string().required("Required"),
  image: Yup.string().required("A file is required"),
});
