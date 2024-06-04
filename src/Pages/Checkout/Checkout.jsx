import React from "react";
import { Button, Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Headers } from "../../Components/Header/Header";
import { NavBar2 } from "../../Components/NavBar2/NavBar2";
import "./Checkout.css";
import {
  DeleteFromCart,
  increment,
  decrement,
} from "../../Redux/Actions/cartActions/cartActions";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { ProductID } from "../../Redux/Actions/productDescription/productDescription";
export const Checkout = () => {
  const cartData = useSelector((state) => state?.cartReducer);
  const dispatch = useDispatch();
  const discount = 600;
  const Total = cartData.reduce(
    (total, item) => item.price * item.quantity + total,
    0
  );
  return (
    <div>
      <Headers />
      <NavBar2 className="navBar" />
      <div className="main-Body">
        {cartData.length > 0 ? (
          <Card
            className="main-card"
            title={<h1 className="cartHeading">My Cart ({cartData.length})</h1>}
          >
            {cartData?.map((item, index) => (
              <Card key={index}>
                <div className="cardItems">
                  <div className="imgDiv">
                    <img className="prductImg" src={item.imgUrl} height="150" />
                    <div className="actions">
                      <Button
                        className="removeBtn checkout-actions"
                        disabled={item.quantity === 1}
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
                        className="addBtn checkout-actions"
                        onClick={() => dispatch(increment(item.id))}
                      >
                        <PlusOutlined />
                      </Button>
                    </div>
                  </div>
                  <div className="middleDiv">
                    <Link
                     className="link"
                      to="/productDescription"
                      onClick={() => dispatch(ProductID(item))}
                    >
                      <span className="item-title">{item.title}</span><br/>
                      <span>{item.description}</span><br/>
                      <span className="price">Price : ₹{item.price}</span>
                    </Link>
                    <div className="save-remove-btns">
                      <Button className="sfl-btn">SAVE FOR LATER </Button>
                      <Button
                        className="removeAll"
                        onClick={() => dispatch(DeleteFromCart(item.id))}
                      >
                        REMOVE
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
            <Link to="/payment">
              <Button className="place-order-btn">Place Order</Button>
            </Link>
          </Card>
        ) : (
          <div className="empty-state">
            <h1>Your cart is empty</h1>
          </div>
        )}

        {cartData.length > 0 && (
          <div className="left-content">
            <Card
              title={<h1 className="price-details">PRICE DETAILS</h1>}
              style={{ width: 300 }}
            >
              <div className="pricing-div">
                <div>
                  <p className="p-tag">Price ({cartData.length} items)</p>
                  <p className="p-tag ">Discount </p>
                  <p className="p-tag">Delivery Charges </p>
                </div>
                <div className="">
                  <p className="p-tag">₹ {Total}</p>
                  <p className="p-tag discount"> - ₹ {discount}</p>
                  <p className="p-tag free">FREE</p>
                </div>
              </div>
              <hr className="hr-Line" />
              <div className="total">
                <div>
                  <p>Total</p>
                </div>
                <div>
                  <p> ₹{Total - discount}</p>
                </div>
              </div>
              <hr className="hr-Line" />
              <p className="savings">You will save ₹{discount} on this order</p>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};
