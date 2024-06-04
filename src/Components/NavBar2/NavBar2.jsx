import React from 'react'
import { DownOutlined } from '@ant-design/icons'
import './NavBar2.css'

export const NavBar2 = () => {
  return (
    <div className='NavBar2'>
        <span>Electronics<DownOutlined className='icon'/></span>
        <span>TVs & Appliances<DownOutlined className='icon' /></span>
        <span>Men<DownOutlined  className='icon'/></span>
        <span>Women<DownOutlined /></span>
        <span>Baby & Kids<DownOutlined  className='icon'/></span>
        <span>Home & Furniture<DownOutlined  className='icon'/></span>
        <span>Sports,Books & More<DownOutlined  className='icon'/></span>
        <span>Flights</span>
        <span>Offer Zone</span>
        <span>Zone</span>
    </div>
  )
}
