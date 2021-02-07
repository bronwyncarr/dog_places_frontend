import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import Map from "./Map";
import LocationsContainer from "./Location/LocationsContainer";
import NearMe from "./NearMe";

function Locations() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    async function getLocations() {
      try {
        const response = await axios(
          `${process.env.REACT_APP_BACKEND_URL}/locations`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setLocations(response.data);
      } catch (error) {
        console.error("Get Error");
      }
    }
    getLocations();
  }, []);

  return (
    <>
      <h1>Locations</h1>
      {/* <NearMe setLocations={setLocations} /> */}
      <SearchBar />
      <Map locations={locations} />
      {/* Once locations available, list all locations with show, edit, delete links. */}
      <LocationsContainer locations={locations} />
    </>
  );
}

export default Locations;
