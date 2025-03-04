import React, { useEffect, useState } from "react";
import { act } from 'react-dom/test-utils';
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    act(() => {
      fetch("http://localhost:6001/plants")
        .then((response) => response.json())
        .then((data) => setPlants(data));
    });
  }, []);

  const handleAddPlant = (newPlant) => {
    act(() => {
      setPlants((prevPlants) => [...prevPlants, newPlant]);
    });
  };

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search setSearchTerm={setSearchTerm} />
      <PlantList plants={plants} searchTerm={searchTerm} />
    </main>
  );
}

export default PlantPage;
