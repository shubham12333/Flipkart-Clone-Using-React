import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Headers } from "../../Components/Header/Header";
import ReactImageMagnify from "@blacklab/react-image-magnify";
import { NavBar2 } from "../../Components/NavBar2/NavBar2";
import { Breadcrumb, Button } from "antd";
import "./Product_Description.css";
import { AddToCart } from "../../Redux/Actions/cartActions/cartActions";

export const Product_Description = () => {
  const product = useSelector((state) => state?.productDescriptionReducer);
  const dispatch = useDispatch()
  return (
    <div>
      <Headers />
      <NavBar2 />
      <div className="productDetails">
        <div>
          <ReactImageMagnify
            className="productImage"
            imageProps={{
              alt: product.title,
              isFluidWidth: true,
              src: product.imgUrl,
              width: 500,
            }}
            magnifiedImageProps={{
              src: product.imgUrl,
              width: 800,
              height: 1200,
            }}
          />
        </div>
        <div className="left-div">
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Clothing And Accessories</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Lehenga Cholis</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Women's Lehenga Cholis</Breadcrumb.Item>
          </Breadcrumb>
          <div>
            <h1 style={{ fontSize: "24px" }} className="productTitle">
              {product.title}
            </h1>
            <h2>{product.description}</h2>
            <img
              className="fimage"
              src="/images/fassured.png"
              height="20"
              width="100"
            />
            <p style={{ color: "#388e3c", fontWeight: 800, fontSize: "16px" }}>
              Special price
            </p>
            <div className="description-atc">
              <h2> ₹ {product.price}</h2>
              <Button
                className="addToCart addtBTN"
                onClick={() => dispatch(AddToCart(product))}
              >
                Add To Cart
              </Button>
            </div>
          </div>
          <div>
            <h2>Available offers</h2>

            <p>
              <img
                className="img"
                src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
              />
              <span>Special Price</span> Get extra 32% off (price inclusive of
              discount) <span style={{ color: "#2874f0" }}>T&C</span>
            </p>

            <p>
              <img
                className="img"
                src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
              />
              <span>Bank Offer</span> 5% Unlimited Cashback on Flipkart Axis
              Bank Credit Card <span style={{ color: "#2874f0" }}>T&C</span>
            </p>

            <p>
              <img
                className="img"
                src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
              />
              <span> Partner Offer</span> Sign up for Flipkart Pay Later and get
              Flipkart Gift Card worth ₹100*
              <span style={{ color: "#2874f0" }}>Know More</span>
            </p>

            <p>
              <img
                className="img"
                src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
              />
              <span>Partner Offer</span> Order More, Win More: Chance to win an
              iPad and EGVs worth ₹5000 on Flipkart Pay Later transaction{" "}
              <span style={{ color: "#2874f0" }}>Know More</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
