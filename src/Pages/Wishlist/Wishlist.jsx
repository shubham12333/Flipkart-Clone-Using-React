import React from "react";
import { Headers } from "../../Components/Header/Header";
import { NavBar2 } from "../../Components/NavBar2/NavBar2";
import "./Wishlist.css";
export const Wishlist = () => {
  return (
    <>
      <Headers />
      <NavBar2 />
      <div className="container">
        <span className="wishList">
          Your wishlist is empty, add items to see them in your wishlist
        </span>
      </div>
    </>
  );
};
