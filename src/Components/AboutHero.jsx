import React from 'react'
import './AboutHero.css';

function AboutHero({
      image,
      heading,
      description,
      primaryButton,
      secondaryButton,
      className = ""
  }) {
  return (
    <div className={`about-hero ${className}`}>

      {image && <img src={image} alt="Logo" />}

      {heading && <h1>{heading}</h1>}

      {description && <p>{description}</p>}

      <div className="buttons">
        {primaryButton && (
          <button className="about-btn">
            {primaryButton}
          </button>
        )}

        {secondaryButton && (
          <button className="products-btn">
            {secondaryButton}
          </button>
        )}
      </div> 
  
    </div>

  );
}

export default AboutHero;