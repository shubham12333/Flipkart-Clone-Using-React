import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React, { useState } from "react";

export const Header_Btn = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div>
      <Button
        className="side-menu-btn"
        onClick={toggleCollapsed}
        style={{ width: 80 }}
      >
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
      </Button>
    </div>
  );
};
