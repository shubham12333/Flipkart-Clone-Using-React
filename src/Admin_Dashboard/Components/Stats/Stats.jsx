import React from "react";
import { Admin_header } from "../Admin_Header/Admin_header";
import { Sidemenu } from "../Sidemenu/Sidemenu";
import './Stats.css'
export const Stats = () => {
  return (
    <div>
    <Admin_header/>
    <div className="stats-container">
    <Sidemenu/>
      <div>
        <img src="/images/sales.png" className="salesImg1" />
      </div>
      <div>
        <img src="/images/piechart.png" className="salesImg2" />
      </div>
    </div>
    </div>
  );
};
