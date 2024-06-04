import axios from "axios";
import React, { useEffect, useState } from "react";
import { Admin_header } from "../../Components/Admin_Header/Admin_header";
import { Sidemenu } from "../../Components/Sidemenu/Sidemenu";
import './Product_List.css'
export const Product_List = () => {
  const [productList,setProductList] = useState([]);
  useEffect(async () => {
    await axios
      .get("http://localhost:5000/api/v1/products/product", 
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
  },[]);
  return (
    <div>
    <div className="adminHeader">
      <Admin_header />
      </div>
      <div className="productlist-container">
      <div className="SideMenu">
        <Sidemenu/>
        </div>
        <div >
        <div className="table-container">
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
            <tbody>
                {productList?.map((product,index) => (
                <tr key={index}>
                  <td>
                    <strong>{product.title}</strong>
                  </td>
                  <td>
                    {product.category.type}
                  </td>
                  <td>{product.id}</td>
                  <td>{product.productBrand.name}</td>
                  <td> $ {product.price}</td>
                  <td><img height='200'  src={product.imgUrl}/>
                  </td>
                </tr>
              )
          )}
            </tbody>
          </table>
        </div>
        </div>
      </div>
    </div>
  );
};
