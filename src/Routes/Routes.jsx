import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./RouteType";
export const Routing = () => {
  const antIcon = (
  <LoadingOutlined className="loader" style={{ fontSize: 48 }} spin />
);
  return (
    <div>
     <Suspense fallback={<Spin indicator={antIcon}/>}>
      <Router>
        <Routes>
          {routes?.map((route,index) => {
            return <Route key={index} path={route.path} element={route.element} />;
          })}
        </Routes>
      </Router>
      </Suspense>
    </div>
  );
};
