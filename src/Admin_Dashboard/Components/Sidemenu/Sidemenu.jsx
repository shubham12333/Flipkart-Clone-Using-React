import React, { useState } from "react";
import { Menu} from "antd";
import {
  DesktopOutlined,
  AreaChartOutlined,
  AuditOutlined,
  UserSwitchOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import './SideMenu.css'
export const Sidemenu = () => {
      const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const handleClick = (key) => {      
    switch (key) {
      case '1':
        navigate("/sellerList");
        break;
      case '2':
        navigate("/userList");
        break;
      case '3':
        navigate("/productList");
        break;
      case '4':
        navigate("/addProduct");
        break;
      case '5':
        navigate("/stats");
        break;
         default:
        break;
    }
  };
  return (
    <div className="middle-container sideMenu">
      <div className={collapsed ? "side-menu-closed" : "side-menu-open"}>
        <Menu mode="vertical" theme="dark" inlineCollapsed={collapsed}>
          <Menu.Item
            key="1"
            icon={<AuditOutlined />}
            onClick={(e) => handleClick(e.key)}
          >
            Seller List
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={<UserSwitchOutlined />}
            onClick={(e) => handleClick(e.key)}
          >
            User List
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={<ShoppingOutlined />}
            onClick={(e) => handleClick(e.key)}
          >
            Product List
          </Menu.Item>
          <Menu.Item
            key="4"
            icon={<DesktopOutlined />}
            onClick={(e) => handleClick(e.key)}
          >
            Add Products
          </Menu.Item>
          <Menu.Item
            key="5"
            icon={<AreaChartOutlined />}
            onClick={(e) => handleClick(e.key)}
          >
            Statistics
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
};
