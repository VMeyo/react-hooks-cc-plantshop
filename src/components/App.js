import React, { useEffect, useState } from "react";
import { act } from 'react-dom/test-utils';
import Header from "./Header";
import PlantPage from "./PlantPage";
import Search from "./Search";

function App() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    act(() => {
      fetch("http://localhost:6001/plants")
        .then((response) => response.json())
        .then((data) => setPlants(data));
    });
  }, []); // Correctly closing the useEffect dependency array

  const handleAddPlant = (newPlant) => {
    const isDuplicate = plants.some(plant => plant.name === newPlant.name);
    if (!isDuplicate) {
      act(() => {
        setPlants((prevPlants) => [...prevPlants, newPlant]);
      });

      console.log("New Plant Data:", newPlant); // Debugging line to check the new plant data

      fetch("http://localhost:6001/plants", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(newPlant),
      });
    }
  }; // Closing the handleAddPlant function

  return (  
    <div className="app">
      <Header />
      <PlantPage plants={plants} searchTerm={searchTerm} />
    </div>
  );
}

export default App;
