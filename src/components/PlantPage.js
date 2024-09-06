import { React, useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(res => res.json())
      .then(data => setPlants(data))
      .catch(error => console.error(error));
  }, []);


  const addNewPlant = (newPlant) => {
    setPlants([...plants, newPlant]);
  };

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant} />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <PlantList plants={plants} searchTerm={searchTerm} />
    </main>
  );
}

export default PlantPage;
