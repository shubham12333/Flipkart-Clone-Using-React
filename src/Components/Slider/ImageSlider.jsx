import { Carousel } from "antd";
import React from "react";
import "./ImageSlider.css";

export const ImageSlider = () => {
  const contentStyle = {
    height: "280px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
    arrows: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
  };
  return (
    <div>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>
            <img className="sliderImg" src="/images/slider1.webp" />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img className="sliderImg" src="https://rukminim2.flixcart.com/flap/1200/640/image/6b8c9831c3b4c766.jpg?q=50" />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img className="sliderImg" src="/images/slider2.jpg" />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img className="sliderImg" src="/images/slider3.jpg" />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img className="sliderImg" src="/images/slider4.jpg" />
          </h3>
          </div>
          <div>
          <h3 style={contentStyle}>
            <img className="sliderImg" src="/images/slider5.webp" />
          </h3>
        </div>
      </Carousel>
    </div>
  );
};
