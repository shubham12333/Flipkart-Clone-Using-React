import React from "react";
import { Headers } from "../../Components/Header/Header";
import { NavBar2 } from "../../Components/NavBar2/NavBar2";

export const Profile = () => {
  let styles = {
    marginTop: "20px",
    borderShadow: "0 1px 2px 0 rgb(0 0 0 / 40%)",
  };
  return (
    <div>
      <Headers />
      <NavBar2 />
      <img src="/images/profile.png" />
    </div>
  );
};
