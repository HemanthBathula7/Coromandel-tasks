    import React from 'react'
    import './Fresh.css';

    function Fresh({
            topText,
            heading,
            description,
            items,
            buttonText,
            image,
            freshCss = " "
            }) {
  return (
    <div className={`fresh-section ${freshCss}`}>

      <div className="fresh-content">
        {topText && <h6>{topText}</h6>}

        {heading && <h1>{heading}</h1>}

        {description && <p>{description}</p>}

        {items && (
          <ul className="content-list">
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}

        {buttonText && <button>{buttonText}</button>}
      </div>

      <div className={`fresh-image ${freshCss}`}>
        {image && <img src={image} alt="" />}
      </div>

    </div>
  );
}

export default Fresh;