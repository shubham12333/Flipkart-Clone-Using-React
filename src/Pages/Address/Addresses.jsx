import React from "react";
import { Card, Col, Row, Breadcrumb } from "antd";
import "./Addresses.css";
import { Link } from "react-router-dom";
import { NavBar2 } from "../../Components/NavBar2/NavBar2";
import { Headers } from "../../Components/Header/Header";

export const Addresses = () => {
  const style = { background: "#0092ff", padding: "8px 0" };
  return (
    <>
      <Headers />
      <NavBar2 />
      <div>
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Your Account</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Your Addresses</a>
          </Breadcrumb.Item>
        </Breadcrumb>

        <div className="site-card-wrapper container">
          <h1 className="heading">Your Addresses</h1>
          <Row gutter={16}>
            <Col span={8}>
            <Link to= '/address'>
              <Card className="card card1" style={{ width: 300, height: 300 }}>
                <div className="content">
                  <img className="plusIcon" src="/images/plus.png" />
                  <h1>Add Address</h1>
                </div>
              </Card>
              </Link>
            </Col>

            <Col span={8}>
              <Card className="card" style={{ width: 300, height: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Col>
            <Col span={8}>
              <Card className="card" style={{ width: 300, height: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Col>
            <Col span={8}>
              <Card className="card" style={{ width: 300, height: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Col>
            <Col span={8}>
              <Card className="card" style={{ width: 300, height: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Col>
            <Col span={8}>
              <Card className="card" style={{ width: 300, height: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};
