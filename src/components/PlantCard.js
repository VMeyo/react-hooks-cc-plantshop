import React from "react";

function PlantCard({ plant }) {
  return (
    <li className="card" data-testid="plant-item">
      <img src={"https://via.placeholder.com/400"} alt={"plant name"} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {plant.inStock ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
