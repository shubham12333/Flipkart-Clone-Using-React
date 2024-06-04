import React from "react";
import { Formik, ErrorMessage } from "formik";
import { Input, Form } from "formik-antd";
import { productValidationSchema } from "../../Pages/Add_Product/Add_product_validations";
import "./AddProductForm.css";
export const AddProductForm = () => {
  const initialValues = {
    category_id: "",
    createdBy: "",
    productName: "",
    deatil: "",
    price: "",
    image: "",
    brand_id: "",
  };
  const onSubmit = async (values, submitProps) => {
    console.log(values);
    console.log(submitProps);
    submitProps.setSubmitting(false);
    submitProps.resetForm();
  };
  return (
    <div >
      <Formik
        initialValues={initialValues}
        validationSchema={productValidationSchema}   
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form autoComplete="off" className="addProduct">
            <h1 className="addPrroduct-heading">Add a new product</h1>
            <span>Product name</span>
            <Input
              name="productName"
              status={errors.productName && touched.productName ? "error" : ""}
            />
            <ErrorMessage name="productName">
              {(msg) => <div style={{ color: "red" }}>{msg}</div>}
            </ErrorMessage>
            <span>Enter product details</span>
            <Input
              name="deatil"
              status={errors.deatil && touched.deatil ? "error" : ""}
            />
            <ErrorMessage name="deatil">
              {(msg) => <div style={{ color: "red" }}>{msg}</div>}
            </ErrorMessage>
            <span>Enter Category ID</span>
            <Input
              name="category_id"
              status={errors.category_id && touched.category_id ? "error" : ""}
              pattern="[0-9]*"
              type="text"
              placeholder="Enter Category ID"
            />
            <ErrorMessage name="category_id">
              {(msg) => <div style={{ color: "red" }}>{msg}</div>}
            </ErrorMessage>
            <span>Enter Brand ID</span>
            <Input
              name="brand_id"
              status={errors.brand_id && touched.brand_id ? "error" : ""}
              pattern="[0-9]*"
              type="text"
              placeholder="Enter Brand ID"
            />
            <ErrorMessage name="brand_id">
              {(msg) => <div style={{ color: "red" }}>{msg}</div>}
            </ErrorMessage>
            <span>Enter Product's Price</span>
            <Input
              name="price"
              status={errors.price && touched.price ? "error" : ""}
              pattern="[0-9]*"
            />
            <ErrorMessage name="price">
              {(msg) => <div style={{ color: "red" }}>{msg}</div>}
            </ErrorMessage>
            <span>Product Image</span>
            <Input
              name="image"
              type="file"
              accept="image/gif, image/jpeg, image,png"
              placeholder="Select a file to upload"
              status={errors.image && touched.image ? "error" : ""}
            />
            <ErrorMessage name="image">
              {(msg) => <div style={{ color: "red" }}>{msg}</div>}
            </ErrorMessage>
            <span>Created By</span>
            <Input
              name="createdBy"
              status={errors.createdBy && touched.createdBy ? "error" : ""}
            />
            <ErrorMessage name="createdBy">
              {(msg) => <div style={{ color: "red" }}>{msg}</div>}
            </ErrorMessage>
            <div>
              <button type="submit" className="submit-btn addProduct-btn">
                Add Product
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
