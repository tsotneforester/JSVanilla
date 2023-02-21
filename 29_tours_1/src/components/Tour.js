import React, { useState } from "react";

const Tour = ({ tours, handler }) => {
  return tours.map((trip) => {
    return (
      <article key={trip.id}>
        <img src={trip.image} alt={trip.name} />
        <div className="tour-info">
          <span className="tour-price">{trip.price}$</span>
          <h4>{trip.name}</h4>
          <p>{trip.info}</p>
        </div>
        <button
          className="delete-btn"
          onClick={() => {
            handler(trip.id);
          }}>
          Not interested
        </button>
      </article>
    );
  });
};

export default Tour;
