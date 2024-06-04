import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Switch } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Admin_header } from "../../Components/Admin_Header/Admin_header";
import { Sidemenu } from "../../Components/Sidemenu/Sidemenu";

export const User_list = () => {
  const [productList,setProductList] = useState([]);
  useEffect(async () => {
    await axios
      .get("", 
      // {
      //   headers: { Authorization: `Bearer ${token}` },
      // }
      )
      .then(async (res) => {
        console.log(res.data.data);
        setProductList(res.data.data)
      })
      .catch(async (error) => {
        console.log("Error>>", error);
      });
  });
  return (
    <div>
      <Admin_header />
      <div className="sellerList-conatiner">
        <Sidemenu />
        <div className="table">
          <table id="customers">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Category</th>
                <th>ID</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Image</th>
              </tr>
            </thead>
            {/* <tbody>

                {productList?.map((product) => (
                <tr key={product.title}>
                  <td>
                    {product.category.type}
                  </td>
                  <td>{product.id}</td>
                  <td>{product.productBrand.name}</td>
                  <td> $ {product.price}</td>
                  <td><img height='200' width='200'  src={product.imgUrl}/>
                  </td>
                </tr>
              
          ))}
            </tbody> */}
          </table>
        </div>
      </div>
    </div>
  );
};
