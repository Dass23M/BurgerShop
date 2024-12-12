import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and About Section */}
        <div className="footer-logo">
          <h2>Happy Burger</h2>
          <p>Your ultimate destination for delicious, freshly-made burgers. Join us for an unforgettable experience full of flavors and smiles!</p>
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>123 Burger Lane, Food Town, FL 12345</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@happyburger.com</p>
        </div>

        {/* Newsletter Subscription */}
        <div className="footer-newsletter">
          <h3>Subscribe to Our Newsletter</h3>
          <p>Get updates on our latest offers and special deals!</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your Email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="footer-social">
        <p>Follow us:</p>
        <a href="#facebook" className="social-icon"><i className="fab fa-facebook-f"></i></a>
        <a href="#twitter" className="social-icon"><i className="fab fa-twitter"></i></a>
        <a href="#instagram" className="social-icon"><i className="fab fa-instagram"></i></a>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© 2024 Happy Burger. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
