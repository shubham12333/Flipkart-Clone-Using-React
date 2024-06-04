
import React from "react";
import { AddProductForm } from "../../Components/Add_product/AddProductForm";
import { Admin_header } from "../../Components/Admin_Header/Admin_header";
import { Sidemenu } from "../../Components/Sidemenu/Sidemenu";
import './Add_Product.css'
export const Add_Product = () => {
  return (
    <div>
      <Admin_header />
      <div className="addProduct-container">
      <div>
        <Sidemenu />
        </div>
        <div className="AddProductForm">
        <AddProductForm/>
        </div>
      </div>
    </div>
  );
};
