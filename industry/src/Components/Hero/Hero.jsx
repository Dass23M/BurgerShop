import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Savor the Best Burgers in Town!</h1>
            <p>Indulge in our delicious, freshly grilled burgers made with the finest ingredients.
            From classic flavors to gourmet creations, we’ve got something to satisfy every craving.</p>

            <button className="order-now-btn">Order Now</button>
        </div>

    </div>
  )
}

export default Hero