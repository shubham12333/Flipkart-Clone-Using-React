import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { Drawer, Button, Badge, notification } from "antd";
import {
  DeleteFromCart,
  increment,
  decrement,
} from "../../Redux/Actions/cartActions/cartActions";
import "./Cart.css";
import { Link } from "react-router-dom";
export const Cart = () => {
  const [visible, setVisible] = useState(false);
  const cartData = useSelector((state) => state?.cartReducer);
  const dispatch = useDispatch();
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const toatalItems = cartData?.reduce(
    (total, item) => item.quantity + total,
    0
  );

  return (
    <>
      <a className="cartBtn" onClick={showDrawer}>
        <span className="cart">Cart</span>
        <Badge count={cartData.length}>
          <img className="cartIcon" src="/images/cart.png" />
        </Badge>
      </a>

      <Drawer
        title="🛒 Cart"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <h2>You have {toatalItems} items in cart</h2>

        {cartData?.map((item, index) => (
          <div className="cartDrawerItems" key={index}>
            <div className="titleBtn">
              <p className="text">
                {item.title} : ₹{item.price}
              </p>
              <div className="actions">
                <Button
                  className="removeBtn"
                  disabled={item.quantity===1}
                  onClick={() => dispatch(decrement(item.id))}
                >
                  <MinusOutlined />
                </Button>
                <input
                  type="text"
                  value={item.quantity}
                  disabled
                  className="inputQuantity"
                />
                <Button
                  className="addBtn"
                  onClick={() => dispatch(increment(item.id))}
                >
                  <PlusOutlined />
                </Button>
              </div>
            </div>
            <div className="cartRemove">
              <div className="imgDiv">
                <img className="drawerImage" src={item.imgUrl} height="100px" />
              </div>
              <Button
                className="removeAll"
                onClick={() => dispatch(DeleteFromCart(item.id))}
              >
                Remove Item
              </Button>
            </div>
          </div>
        ))}
        {cartData.length > 0 && (
          <>
            <h2>
              <hr />
              Total : ₹
              {cartData.reduce(
                (total, item) => item.price * item.quantity + total,
                0
              )}
            </h2>

            <hr />
            <div>
              <Link to="/checkout">
                <Button className="checkout-btn">Checkout</Button>
              </Link>
            </div>
          </>
        )}
      </Drawer>
    </>
  );
};
