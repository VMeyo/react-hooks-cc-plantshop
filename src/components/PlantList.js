import React, { useState } from "react";

function PlantList({ plants }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [plantStock, setPlantStock] = useState(
    plants.reduce((acc, plant) => {
      acc[plant.name] = true; // All plants start as "In Stock"
      return acc;
    }, {})
  );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const toggleStock = (plantName) => {
    setPlantStock((prevStock) => ({
      ...prevStock,
      [plantName]: !prevStock[plantName],
    }));
  };

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="searchbar">
        <label htmlFor="search">Search Plants:</label>
        <input
          id="search"
          type="text"
          placeholder="Type a name to search..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <ul className="cards">
        {filteredPlants.map((plant) => (
          <li key={plant.id} className="card" data-testid="plant-item">
            <img src={plant.image} alt={plant.name} />
            <h4>{plant.name}</h4>
            <p>Price: {plant.price}</p>
            <button
              className="primary"
              onClick={() => toggleStock(plant.name)}
            >
              {plantStock[plant.name] ? "In Stock" : "Out of Stock"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlantList;
