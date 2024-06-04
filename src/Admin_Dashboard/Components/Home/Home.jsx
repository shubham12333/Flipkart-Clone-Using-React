import { getsellerList } from "../../Admin_Redux/Seller_List/Action/sellerListAction";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./Home.css";
import { Sidemenu } from "../Sidemenu/Sidemenu";
import { Admin_header } from "../Admin_Header/Admin_header";
export const Home = () => {
   const [collapsed, setCollapsed] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getsellerList());
  }, []);
  return (
    <>
      <Admin_header/>
      <div className="middle-container">
        <div className={collapsed ? "side-menu-closed" : "side-menu-open"}>
          <Sidemenu/>
        </div>
        <div className="stats">
          <div>
            <img src="/images/sales.png" className="salesImg1" />
          </div>
          <div>
            <img src="/images/piechart.png" className="salesImg2" />
          </div>
        </div>
      </div>
    </>
  );
};
