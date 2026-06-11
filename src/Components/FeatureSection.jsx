import React from 'react'
import image5 from '../assets/5.jpg';
import './FeatureSection.css';

function FeatureSection() {
  return (
    <div className="feature-section">
        <img src={image5} />
        <h1>Quality Bread</h1>
        <div className="feature-section-content">
         <div className="feature-left">   
            <p>
                At our bakery, we are passionate about crafting fresh, high-quality bread using carefully selected ingredients 
                and traditional baking techniques. Every loaf is baked daily to ensure exceptional taste, texture, and freshness. 
                From classic artisan breads to specialty creations, we strive to bring warmth and flavor to every table.
                Our skilled bakers combine time-honored recipes with a dedication to excellence, creating products that delight customers of all ages. We believe that great bread starts with quality ingredients, patience, and attention to detail. 
            </p>
        </div>
        <div className="feature-right">
            <p>
                Our commitment to quality begins with premium ingredients and continues through every step of the baking process. 
                We believe that great bread brings people together, creating memorable moments with family and friends. 
                Visit us to experience the aroma, taste, and tradition of authentic baking.
            </p>
            <button>OUR VALUES</button>
        </div>
    </div>
  </div>
  )
}

export default FeatureSection;