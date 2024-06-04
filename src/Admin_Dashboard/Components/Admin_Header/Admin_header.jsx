import React from 'react'
import {
  MailOutlined,
  SearchOutlined,
  SettingOutlined,
  BellOutlined,
} from "@ant-design/icons";
import { Badge } from "antd";
import { Link } from 'react-router-dom';
import { Header_Btn } from '../Header_Btn/Header_Btn';
export const Admin_header = () => {
  return (
    <div>
        <div className="header-container adminHeader">
        <div>
         <Header_Btn/>
        </div>
        <div>
          <Link to ='/admin'><h1 className="heading1">ADMIN DASHBOARD</h1></Link>
        </div>
        <div className="right-nav">
          <div>
            <SearchOutlined className="nav-icon" />
          </div>
          <div>
            <MailOutlined className="nav-icon" />
          </div>
          <div>
            <Badge count={3}>
              <BellOutlined className="bell-icon" />
            </Badge>
          </div>
          <div>
            <SettingOutlined className="nav-icon" />
          </div>
          <div>
            <img className="adminImg" src="/images/admin.jpg" />
          </div>
        </div>
      </div>
    </div>
  )
}
