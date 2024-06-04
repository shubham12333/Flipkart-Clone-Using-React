import React,{useEffect} from 'react'
import {Home } from '../../Components/Home/Home'

export const Admin = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "white";
  }, []);
  return (
    <div>
        <Home/>
    </div>
  )
}
