import React from 'react'
import abt1 from '../assets/abt1.jpg';
import abt2 from '../assets/abt2.jpg';
import './AboutStory.css';

function AboutStory() {
  return (
    <div className="about-story">
        <div className="abt-card">
            <img src={abt1} />
            <h2>OUR STORY</h2>
            <p>
                What began as a small passion for baking has grown into a bakery dedicated to bringing fresh, 
                handcrafted products to our community every day. Using traditional recipes, premium ingredients, 
                and cakes that combine authentic flavors with exceptional quality.
            </p>
            <a href='#' ><h3>LEARN MORE</h3></a>
        </div>
        <div className="abt-card">
            <img src={abt2} />
            <h2>OUR BREAD</h2>
            <p>
                Our bread is crafted using carefully selected ingredients and time-honored baking techniques to ensure 
                outstanding flavor and texture. Each loaf is baked fresh daily, allowing us to deliver the quality 
                and freshness our customers deserve.
            </p>
            <a href='#' ><h3>LEARN MORE</h3></a>
        </div>
    </div>
  )
}

export default AboutStory;