import React from "react";
import "./Products.css";

function Products({
  backgroundImage,
  products,
  traditionsTitle,
  traditions,
  buttonText
}) {
  return (
    <section className="products">
      
      <div className="products-image">
        <img src={backgroundImage} alt="Background" />
      </div>

      <div className="product-cards">
        {products.map((item) => (
          <div className="card" key={item.id}>
            <h1>{item.id}</h1>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <div className="traditions">
        <h1>{traditionsTitle}</h1>

        {traditions.map((item, index) => (
          <div className="traditions-items" key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}

        {buttonText && <button>{buttonText}</button>}
      </div>

    </section>
  );
}

export default Products;