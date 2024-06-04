import React from 'react'
import { Headers } from '../../Components/Header/Header'
import { NavBar2 } from '../../Components/NavBar2/NavBar2'
import './FlipkartPlus.css'

export const FlipkartPlus = () => {
  return (<>
    <Headers/>
    <NavBar2/>
    <div className='main'>
    <div>
      <img className='plus1' src="/images/plus1.png" alt="image" />
    </div>
    <div>
      <img className='plus2' src="/images/plus2.png" alt="image" />
    </div>
    </div>
 </> )
}
