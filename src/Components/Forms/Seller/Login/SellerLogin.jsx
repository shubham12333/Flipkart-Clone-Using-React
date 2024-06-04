import { Formik, ErrorMessage } from "formik";
import { Input, Form } from "formik-antd";
import { sellerLogin } from "../../../../Redux/Actions/sellerActions/Seller_Login/sellerLogin";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { sellerloginValidations } from "./sellerLoginValidations";
import { useDispatch } from "react-redux";
export const SellerLogin = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    document.body.style.backgroundColor = "rgb(0, 120, 212)";
  });
  const onSubmit = (values, submitProps) => {
    console.log(values);
    submitProps.setSubmitting(false);
    submitProps.resetForm();
     dispatch(sellerLogin(values));
    if (localStorage.getItem("Token")) {
      navigate("/admin");
    }
  };
  return (
    <>
      <Link to="/">
        <img className="logo" src="images/Flipkart.jpg" />
      </Link>
      <div className="maindiv">
        <Formik
          initialValues={initialValues}
          validationSchema={sellerloginValidations}
          onSubmit={onSubmit}
        >
          {({ errors, touched }) => (
            <Form className="formBody" autoComplete="off">
              <div>
                <h1 className="heading">Login your Seller Account</h1>
              </div>
              <div>
                <label>
                  <Input
                    name="email"
                    placeholder="Enter Your Email Address"
                    type="text"
                    status={errors.email && touched.email ? "error" : ""}
                  />
                </label>
                <ErrorMessage name="email">
                  {(msg) => (
                    <div
                      style={{
                        color: "red",
                        fontSize: "11px",
                        textAlign: "center",
                      }}
                    >
                      {msg}
                    </div>
                  )}
                </ErrorMessage>
              </div>
              <div>
                <label>
                  <Input
                    name="password"
                    placeholder="Enter Your Password"
                    type="password"
                    status={errors.password && touched.password ? "error" : ""}
                  />
                </label>
                <ErrorMessage name="password">
                  {(msg) => (
                    <div
                      style={{
                        color: "red",
                        fontSize: "11px",
                        textAlign: "center",
                      }}
                    >
                      {msg}
                    </div>
                  )}
                </ErrorMessage>
              </div>
              <div>
                <button className="submit-btn">Submit</button>
              </div>
              <span>
                Don't have Account ? <Link to="/register">Register</Link>
              </span>
            </Form>
          )}
        </Formik>
      </div>
      <div>
        <img className="image" src="/images/seller.png" />
      </div>
    </>
  );
};
