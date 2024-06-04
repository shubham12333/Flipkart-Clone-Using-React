import React, { useEffect, useState } from "react";
import { Formik, ErrorMessage, Field } from "formik";
import axios from "axios";
import { validationSchema } from "./Validations";
import { Input, Select, Form } from "formik-antd";
import { Headers } from "../../Components/Header/Header";
import { NavBar2 } from "../../Components/NavBar2/NavBar2";
import "./addAddres.css";

export const AddAddress = () => {
  const [countryData, setCountryData] = useState([]);
  const [states, setStates] = useState([]);
  const [loading, setLoading] = useState(false);
  const initialValues = {
    country: "",
    fullName: "",
    number: "",
    pincode: "",
    houseNo: "",
    street: "",
    landmark: "",
    city: "",
    state: "",
    addressType: "",
  };
  useEffect(async () => {
    const response = await axios.get(
      "https://countriesnow.space/api/v0.1/countries/states"
    );
    setCountryData(response.data.data);
  }, [states]);

  const onSubmit = async(values, submitProps) => {
    await axios.post(`https://mean-mole-48.loca.lt/api/create_address`, values)
      .then(res => {
        console.log(res)
      })
    submitProps.setSubmitting(false);
    submitProps.resetForm();
  };
  const handleChangeCountry = (state) => {
    const foundStates = countryData?.find((c) => c.name === state)?.states;
    setStates(foundStates);
    setLoading(true);
  };

  return (
    <>
      <Headers />
      <NavBar2 />
      <div className="mainBody">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched }) => (
            <Form className="formBody" autoComplete="off">
              <h1>Add a new address</h1>
              <span htmlFor="country">Country/Region</span>
              <Select
                placeholder="Select Country"
                name="country"
                showSearch
                onChange={(value) => handleChangeCountry(value)}
                status={errors.country && touched.country ? "error" : ""}
              >
                {countryData?.map((option) => (
                  <Select.Option key={option.iso3} value={option.name}>
                    {option.name}
                  </Select.Option>
                ))}
              </Select>
              <ErrorMessage name="country">
                {(msg) => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
              <span>Full name</span>
              <Input
                name="fullName"
                status={errors.fullName && touched.fullName ? "error" : ""}
              />
              <ErrorMessage name="fullName">
                {(msg) => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
              <span>Mobile number</span>
              <Input
                name="number"
                status={errors.number && touched.number ? "error" : ""}
                pattern="[0-9]*"
                addonBefore="🇮🇳+91"
                type="text"
                placeholder="Enter Your Mobile Number"
              />
              <ErrorMessage name="number">
                {(msg) => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
              <span>Pincode</span>
              <Input
                name="pincode"
                status={errors.pincode && touched.pincode ? "error" : ""}
                pattern="[0-9]*"
                placeholder="6 diits [0-9] PIN code"
              />
              <ErrorMessage className="error" name="pincode">
                {(msg) => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
              <span>Flat, House no., Building, Company, Apartment</span>
              <Input
                name="houseNo"
                status={
                  errors.houseNo && touched.houseNo ? "error" : ""
                }
              />
              <ErrorMessage name="houseNo">
                {(msg) => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
              <span>Area, Street, Sector, Village</span>
              <Field
                as="textarea"
                style={{ border: "1px solid #d9d9d9", outline: "none" }}
                name="street"
                className={
                  errors.street && touched.street ? "Error" : ""
                }
              />
              <ErrorMessage name="street">
                {(msg) => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
              <span>Landmark</span>
              <Input
                name="landmark"
                status={errors.landmark && touched.landmark ? "error" : ""}
                placeholder="E.g. near apollo hospital"
              />
              <ErrorMessage name="landmark">
                {(msg) => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
              <span>Town/City</span>
              <Input
                name="city"
                status={errors.city && touched.city ? "error" : ""}
              />
              <ErrorMessage name="city">
                {(msg) => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
              <span htmlFor="state">State</span>
              <Select
                notFoundContent={
                  <p className="error">Please select country first</p>
                }
                name="state"  
                placeholder="Select State"
                status={errors.state && touched.state ? "error" : ""}
              >
                {states.map((option, index) => (
                  <Select.Option key={index} value={option.name}>
                    {option.name}
                  </Select.Option>
                ))}
              </Select>
              {loading && (
                <ErrorMessage name="state">
                  {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                </ErrorMessage>
              )}
              <h2>Add delivery instructions</h2>
              <span>
                Preferences are used to plan your delivery. However, shipments
                can sometimes arrive early or later than planned.
              </span>
              <h2>Address Type</h2>
              <Select
                placeholder="Select an Address Type"
                name="addressType"
                status={
                  errors.addressType && touched.addressType ? "error" : ""
                }
              >
                <Select.Option key={"Home"}>
                  Home(7 am - 9 pm delivery)
                </Select.Option>
                <Select.Option key={"Office"}>
                  Office/Commercial(10 am - 6 pm delivery)
                </Select.Option>
              </Select>
              <ErrorMessage name="addressType">
                {(msg) => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
              <div>
                <button type="submit" className="submit-btn">
                  Add address
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};
