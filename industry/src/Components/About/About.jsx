import React from 'react'
import './About.css'
import about_image from '../../assets/about-image3.jpg'


const About = () => {
  return (
    <div className='about'>

        <div className="about-left">
            <img src={about_image} alt="" className='about-image'/>
        </div>
        <div className="about-right">
            <h4>About</h4>
            <h3> Happy Burger </h3>
            <p>At Happy Burger, we believe that a great burger should do more than just satisfy your hunger – it should make you smile! Our burgers are crafted with the freshest ingredients, from our juicy, perfectly seasoned patties to our crisp, farm-fresh toppings and soft, toasted buns. Every bite is designed to bring joy, comfort, and a burst of flavor to your day. <br></br> <br />
            Founded by burger lovers, for burger lovers, Happy Burger is all about spreading happiness one meal at a time. Our menu features a range of classic and gourmet options, from the timeless cheeseburger to creative seasonal specials that add a unique twist to your burger experience. Whether you’re here for a quick lunch, a family dinner, or just a delicious treat, we’re here to make every moment unforgettable.</p>
        </div>
    </div>
  )
}

export default About