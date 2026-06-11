import React from 'react'
import './ContactSection.css';
import image6 from '../assets/6.jpg';
import image7 from '../assets/7.jpg';
import image8 from '../assets/8.jpg';
import SocialIcons from './SocialIcons';

function ContactSection() {
  return (
    <>
      <div className="contact-preview">

        <div className="contact-products">

          <div className="product-card">
            <img src={image6} />
            <h1>Breads</h1>
            <p>Fresh artisan breads baked daily using premium ingredients
              and traditional baking techniques.</p>
          </div>

          <div className="product-card">
            <img src={image7} />
            <h1>Cookies</h1>
            <p>Soft, crunchy, and delicious cookies perfect for every
              occasion and sweet craving.</p>
          </div>

          <div className="product-card">
            <img src={image8} />
            <h1>Pastries</h1>
            <p>Flaky pastries filled with rich flavors and baked to
              golden perfection.</p>
          </div>

        </div>
      </div>

      <div className="contact-address">

        <div className="newsletter">
          <h2>Sign up for the newsletter</h2>
          <p>Want to be the first to read our news? Subscribe to the newsletter to keep abreast of all events.</p>

          <div className="newsletter-input">
            <input type="email" placeholder="Enter a valid email address" />
            <button>SUBMIT</button>
          </div>

          <SocialIcons />
        </div>

        <div className="location">

          <h2>Hours & Location</h2>

          <div className="address">
            <h5>254 W 27ST ST,</h5>
            <h5>Bakery Street, Kakinada, AP</h5>
            <p>+91 98765 43210</p>
          </div>

          <div className="time">
            <p>Monday - Sunday</p>
            <p>7:00am - 8:00pm</p>
          </div>

        </div>

      </div>
    </>
  )
}

export default ContactSection;