import { Button, Modal } from "antd";
import { Formik, ErrorMessage } from "formik";
import { Input, Form } from "formik-antd";
import "./SignupForm.css";
import axios from "axios";
import { validationSchema } from "./SignUpformValidations";
import { useDispatch } from "react-redux";
import {
  openModal,
  signupModal,
} from "../../../Redux/Actions/modal_Action/action";

export const SignupForm = () => {
  const initialValues = {
    fullName: "",
    email: "",
    number: "",
    password: "",
  };
  const dispatch = useDispatch();
  const onSubmit = (values, submitProps) => {
    axios
      .post(`https://cold-grasshopper-8.loca.lt/api/user_signup`, values)
      .then((res) => {
        console.log(res);
      });
    submitProps.setSubmitting(false);
    submitProps.resetForm();
  };
  const Modal = () => {
    dispatch(openModal(true));
    dispatch(signupModal(false));
  };
  return (
    <div className="main-body">
      <img className="modalImage" src="/images/Signup.png" />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form name="normal_login" className="login-form" autoComplete="off">
            <Input
              name="fullName"
              className="inputBox"
              type="text"
              placeholder="Enter your full name"
              bordered={false}
              status={errors.fullName && touched.fullName ? "error" : ""}
            />
            <ErrorMessage name="fullName">
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
            <Input
              name="email"
              type="text"
              className="inputBox"
              placeholder="Enter your Email"
              bordered={false}
              status={errors.email && touched.email ? "error" : ""}
            />
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
            <Input
              name="number"
              className="inputBox"
              type="text"
              placeholder="Enter your Mobile number"
              bordered={false}
              status={errors.number && touched.number ? "error" : ""}
            />
            <ErrorMessage name="number">
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
            <div className="inputPassword">
              <Input
                name="password"
                className="inputBox"
                type="password"
                placeholder="Enter Password"
                bordered={false}
                status={errors.password && touched.password ? "error" : ""}
              />
            </div>
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
            <p className="terms">
              By continuing, you agree to Flipkart's <a>Terms of Use</a>and{" "}
              <a>Privacy Policy</a>.
            </p>
            <div className="modalButtons">
              <Button
                type="submit"
                htmlType="submit"
                className="login-form-button modalLogin-btn"
              >
                CONTINUE
              </Button>
              <p className="or">OR</p>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button otp-btn"
                onClick={() => Modal()}
              >
                Existing User? Login
              </Button>
            </div>
            {/* <a className="NewUser" href="#">
              Existing User? Login
            </a> */}
          </Form>
        )}
      </Formik>
    </div>
  );
};
