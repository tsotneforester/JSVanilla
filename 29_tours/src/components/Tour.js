import React, { useState } from "react";

const Tour = ({ id, image, name, price, info, handler }) => {
  const [show, setShow] = useState(false);

  return (
    <article>
      <div className="tour-info">
        <img src={image} alt={name} />
        <span className="tour-price">{price}$</span>
        <h4>{name}</h4>
        <p className="tour-details">
          {show ? info : info.slice(0, 100) + "..."}
          <span
            className="read-more"
            onClick={() => {
              setShow(!show);
            }}>
            {show ? " Show less" : "Read More"}
          </span>
        </p>
      </div>
      <button
        className="delete-btn"
        onClick={() => {
          handler(id);
        }}>
        Not interested
      </button>
    </article>
  );
};

export default Tour;
