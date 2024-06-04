import React, { useState, useEffect } from "react";
import GooglePayButton from '@google-pay/button-react'
import { Headers } from "../../Components/Header/Header";
import { NavBar2 } from "../../Components/NavBar2/NavBar2";
import { useSelector } from "react-redux";
import {  notification, Space } from 'antd';
import './Payment.css'
import { useNavigate } from "react-router-dom";
export const  Payment = () => {
 const navigate = useNavigate()
  const cartData = useSelector((state) => state?.cartReducer);
const Total = cartData.reduce(
    (total, item) => item.price * item.quantity + total,
    0
  );
  const openNotificationWithIcon = type => {
  notification[type]({
    message: 'Order Placed',
    description:
      'Your Payment was Successfull',
  });
  cartData.length = 0
  navigate('/')
};
  const discount = 600
  return (
      <>
      <Headers/>
      <NavBar2/>
      <div className="paymentDiv">
      <div>
      {cartData.length > 0 && <h2 className="paymentHeading">Pay amount ₹{Total-discount} with Google Pay :</h2>}
      
      </div>
      <div>
    <GooglePayButton
  className="googlePay-btn"
  environment="TEST"
  paymentRequest={{
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['MASTERCARD', 'VISA'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId',
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: '12345678901234567890',
      merchantName: 'Demo Merchant',
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '00',
      currencyCode: 'USD',
      countryCode: 'US',
    },
  }}
  onLoadPaymentData={paymentRequest => {
      openNotificationWithIcon('success')
    console.log('load payment data', paymentRequest);
  }}
  buttonType='buy'
  buttonColor="default"
/>
</div>
</div>
    </>
  );
}