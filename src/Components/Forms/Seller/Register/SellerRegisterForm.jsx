import { Input,Select,Form } from "antd";
import { sellerRegister } from "../../../../Redux/Actions/sellerActions/sellerRegister";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SellerRegisterForm.css";
import { useDispatch } from "react-redux";
export const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });
  const dispatch = useDispatch()
  const [val, setVal] = useState("");
  useEffect(() => {
    document.body.style.backgroundColor = "rgb(0, 120, 212)";
  });
  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    formData.phone = val;
    e.preventDefault();
      if({...formData})
    {
      dispatch(sellerRegister(formData))
    }
  };
  const OTP = () => {
  };
  return (
    <>
      <Link to="/">
        <img className="logo" src="images/Flipkart.jpg" />
      </Link>
      <div className="maindiv">
        <form className="formBody" autoComplete="off" onSubmit={handleSubmit}>
          <div>
            <h1 className="heading">Create your Seller Account</h1>
          </div>
          <div>
            <label>
              <Input
                name="fullName"
                placeholder="Enter Your Full Name"
                value={formData.fullName}
                type="text"
                onChange={handleOnChange}
              />
            </label>
          </div>
          <div>
            <label>
              <Input
                name="email"
                placeholder="Enter Your Email Address"
                value={formData.email}
                type="text"
                onChange={handleOnChange}
              />
            </label>
          </div>
          <div className="mobile">
            <label
              rules={[
                { required: true, message: "Please input your phone number!" },
              ]}
            >
              <Input
                pattern="[0-9]*"
                addonBefore="🇮🇳+91"
                type="text"
                addonAfter={
                  <button
                    disabled={val.length != 10}
                    onClick={() => OTP()}
                    className="OTP-btn"
                  >
                    Send OTP
                  </button>
                }
                placeholder="Enter Your Mobile Number"
                value={val}
                onChange={(e) =>
                  setVal((v) => (e.target.validity.valid ? e.target.value : v))
                }
              />
            </label>
          </div>
          <div>
            <label>
              <Input
                name="password"
                placeholder="Enter Your Password"
                value={formData.password}
                type="password"
                onChange={handleOnChange}
              />
            </label>
          </div>
          <div>
            <button className="submit-btn">Submit</button>
          </div>
          <span>Already have an Account ? <Link to='/sellerLogin'>Login</Link></span>
        </form>
      </div>
      <div>
        <img className="image" src="/images/seller.png"/>
      </div>
    </>
  );
};
