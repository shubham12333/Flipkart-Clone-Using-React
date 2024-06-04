import { Button, Card } from "antd";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../Redux/Actions/getProduct/getProductActions";
import { AddToCart } from "../../Redux/Actions/cartActions/cartActions";
import { ProductID } from "../../Redux/Actions/productDescription/productDescription";
import React from "react";
import "./Product_Details.css";
import { Link } from "react-router-dom";
export const Product_Details = () => {
  const dispatch = useDispatch();
  const { Meta } = Card;
  const fetchData = useSelector((state) => state.getProductReducer.productData);
  useEffect(() => {
    dispatch(getProductDetails());
  }, []);
  const loading = useSelector((state) => state?.getProductReducer?.success);
  return (
    <div className="products">
      {fetchData &&
        fetchData?.map((item, index) => (
          <div className="card" key={index}>
            <Link
              to="/productDescription"
              onClick={() => dispatch(ProductID(item))}
            >
              <Card
                className="cardContent"
                loading={loading}
                hoverable
                style={{ width: 250 }}
                cover={
                  <img
                    className="productImages"
                    alt="product image"
                    src={item.imgUrl}
                  />
                }
              >
                <h2>
                  <Meta title={item.title} description={`₹ ${item.price}`} />
                </h2>
                <img
                  className="fimage"
                  src="/images/fassured.png"
                  height="30"
                  width="150"
                />
              </Card>
            </Link>

            <div className="btn">
              <Button
                className="addToCart"
                onClick={() => dispatch(AddToCart(item))}
              >
                Add To Cart
              </Button>
            </div>
          </div>
        ))}
    </div>
  );
};
