import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { Suspense, useEffect } from "react";
import "./App.css";
const Headers = React.lazy(() =>
  import("../Components/Header/Header").then((module) => ({
    default: module.Headers,
  }))
);
const NavBar = React.lazy(() =>
  import("../Components/NavBar/NavBar").then((module) => ({
    default: module.NavBar,
  }))
);
const ImageSlider = React.lazy(() =>
  import("../Components/Slider/ImageSlider").then((module) => ({
    default: module.ImageSlider,
  }))
);
const Deals = React.lazy(() =>
  import("../Pages/Deals/Deals").then((module) => ({ default: module.Deals }))
);
const Product_Details = React.lazy(() =>
  import("../Pages/Product Details/Product_Details").then((module) => ({
    default: module.Product_Details,
  }))
);
const antIcon = (
  <LoadingOutlined className="loader" style={{ fontSize: 48 }} spin />
);

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = "white";
  }, []);
  return (
    <div className="App">
      <Suspense fallback={<Spin indicator={antIcon}/>}>
        <Headers />
        <NavBar />
        <ImageSlider />
        <Deals />
        <Product_Details />
      </Suspense>
    </div>
  );
}

export default App;
