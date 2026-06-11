import React from 'react';
import "./Footer.css";
import Logo from "../Components/Logo.jsx";
import SocialIcons from './SocialIcons.jsx';

function Footer() {
  return (
    <footer className="footer">
        <Logo />

        <div className="footer-content">
          
          <div className="footer-card">
            <h3>Quick Links</h3>
            <ul className="list">
              <li>About Us</li>
              <li>Bakery Menu</li>
              <li>Visit Us</li>
              <li>Testimonials</li>
            </ul>
          </div>
          <div className="footer-card">
            <h3>Help</h3>
            <ul className="list">
              <li>FAQs</li>
              <li>Allergens</li>
              <li>Contact Us</li>
              <li>Have Your Say</li>
            </ul>
          </div>
          <div className="footer-card">
            <h3>Get In Touch</h3>
            <ul className="list">
              <li>254 W 27ST ST, Kakinada, AP 533001</li>
              <li>hi@bakery.com</li>
              <li>+91 9876543210</li>
            </ul>
          </div>
           <div className="footer-card">
            <h3>Subscribe</h3>
            <div className='input-details'>
              <input type="email" placeholder="Enter a valid email address" />
              <button>SEND A MESSAGE</button>
            </div>
          </div>
        </div>

        <SocialIcons color="#9b938a"/>

    </footer>
  );
}

export default Footer;