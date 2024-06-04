import React from 'react'
import './NavBar.css'

export const NavBar = () => {
  return (
    <div className='Navbar'>
    <div className="navitem offers">
        <img className='navImage imgHover1' src='/images/TopOffers.webp'/>
        <p >Top Offers</p>
    </div>
    <div className="navitem grocery">
        <img className='navImage' src='/images/Grocery.webp'/>    
        <p >Grocery</p>
        </div>
        <div className="navitem Mobiles">
        <img className='navImage' src='/images/Mobiles.webp'/>
        <p>Mobiles</p>
        </div>
        <div className="navitem Fashion">
        <img className='navImage'  src='/images/Fashion.webp'/>
        <p>Fashion</p>
        </div>
        <div className="navitem Electronics">
        <img className='navImage' src='/images/Electronics.webp'/>
        <p>Electronics</p>
        </div>
        <div className="navitem Home">
        <img className='navImage' src='/images/Home.webp'/>
        <p>Home</p>
        </div>
        <div className="navitem Appliances">
        <img className='navImage' src='/images/Appliances.webp'/>
        <p>Appliances</p>
        </div>
        <div className='navitem Travel' >
        <img className='navImage' src='/images/Travel.webp'/>
        <p>Travel</p>
        </div>
        <div className="navitem Beauty">
        <img className='navImage' src='/images/Beauty.webp'/>
        <p>Beauty,Toys and More...</p>
        </div>
    </div>
  )
}
