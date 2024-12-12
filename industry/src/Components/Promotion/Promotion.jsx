import React from 'react';
import './Promotion.css';
import BurgerImage from '../../assets/Promotion1.png'; // Replace with the correct path to your burger image

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-content">
        <div className="banner-text">
          <h1><span className="highlight">Spicy</span> Delicious <br /> BURGER</h1>
          <p className="subheading">This weekend only</p>
          <p className="description">Enjoy our mouth-watering burgers at a special price. Freshly prepared just for you!</p>
          <button className="order-button">Order Now</button>
        </div>
        <div className="banner-image">
          <img src={BurgerImage} alt="Delicious Burger with Fries" />
          <div className="offer-tag">
            <span>Up to</span>
            <span className="discount">50% OFF</span>
          </div>
          <div className="home-delivery">
            <span>24/7</span>
            <span>Home Delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
