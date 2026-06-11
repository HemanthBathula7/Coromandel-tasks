import React from 'react'
import image1 from '../assets/1.jpg';
import image2 from '../assets/3.jpg';
import image3 from '../assets/2.jpg';
import './Quality.css';

function Quality() {
  return (
    <div className="quality-section">
        
        <div className="left-part">
            <div className="quality-card">
                <img src={image1} />
                <p>Our master bakers begin each day before sunrise, carefully preparing dough using traditional recipes and premium ingredients. 
                    Every loaf is crafted to deliver exceptional flavor and freshness.</p>
            </div>
            <div className="quality-card">
                 <img src={image2} />
            </div>
        </div>
        
        <div className="right-part">
            <h1>Quality Breads are baked daily</h1>
            <div className="quality-card card1">
                <img src={image3} />
                <p>We believe great bread starts with quality ingredients. 
                    That's why we use carefully selected flour, natural starters, and time-honored techniques to create breads your family will love.</p>
                <button>VIEW PRODUCTS</button>
            </div>
        </div>
    
    </div>
  )
}

export default Quality;