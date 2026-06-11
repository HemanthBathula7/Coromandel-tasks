import cheeseBread from '../assets/cheese-bread2.jpg';
import french from '../assets/french.jpg';
import milk from '../assets/milk.jpg';
import mixed from '../assets/mixed.jpg';
import farming from '../assets/farming.jpg';
import baguette from '../assets/baguette.jpg';

import './Breadsection.css';

function Breadsection() {
    const breads = [
        {
            "name": "Cheese Bread",
            "price": "$4.50",
            "image": cheeseBread
        },
        {
            "name": "French sourdough",
            "price": "$7.25",
            "image": french
        },
        {
            "name": "Milk Bread",
            "price": "$4.75",
            "image": milk
        },
        {
            "name": "Mixed Grain",
            "price": "$4.25",
            "image": mixed
        },
        {
            "name": "Farming Bread",
            "price": "$5.50",
            "image": farming
        },
        {
            "name": "Baguette",
            "price": "$4.50",
            "image": baguette
        }
    ]
    return (
        <div className="ourbread">
            <div className="breadtext">
                <h1>Our Bread</h1>
                <p>
                    Experience the warmth of handcrafted baking.
                    Our signature breads are made with passion, using time-honored recipes
                    and the finest ingredients for an unforgettable taste.
                </p>
            </div>
            <div className="breads-container">
                {
                    breads.map((bread) => (
                        <div className="bread" key={bread.name}>
                            <img src={bread.image} alt="Bread" />
                            <h3>{bread.name}</h3>
                            <h6>{bread.price}</h6>
                            <button className="addToCart">ADD TO CART</button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Breadsection;