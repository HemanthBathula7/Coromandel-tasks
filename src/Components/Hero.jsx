import React from 'react'
import './Hero.css';
import heroImage from '../assets/hero-image.jpg';

function Hero( {
  topText,
  heading,
  address,
  description,
  phone,
  timings1,
  timings2,
  timings3,
  buttonText,
  classNameNew =""
}) {
  return (
    <section className={`hero-section ${classNameNew}`}> 

      <img src={heroImage} alt='Cake' className='image'/>

      <div className="hero-content">

        {topText && (<p className="top">{topText}</p>)}

        {heading && (<h1>{heading}</h1>)}

        {description && (<p>{description}</p>)}

        {address && (<p>{address}</p>)}

        {phone && (<p>{phone}</p>)}

        {timings1 && (<p>{timings1}</p>)}

        {timings2 && (<p>{timings2}</p>)}

        {timings3 && (<p>{timings3}</p>)}

        {buttonText && (<button>{buttonText}</button>)}
      
      </div>
    
    </section>
  );
}

export default Hero;