import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo1.png'

const Navbar = () => {
  return (
    <nav className='container dark-nav'>
        <img src={logo} alt="" className='logo'/>
        <ul>
            <li>Home </li>
            <li>Menu</li>
            <li>About Us</li>
            <li>Promotions</li>
            <li>Gallery</li>
            <li> <button className='btn'>Contact Us </button></li>
        </ul>
    </nav>
  )
}

export default Navbar