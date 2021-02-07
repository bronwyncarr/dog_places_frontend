import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import Map from "./Map";
import LocationsContainer from "./Location/LocationsContainer";
// import NearMe from "./NearMe";
import useAuthHeaders from "../hooks/useAuthHeaders";

function Locations() {
  const [locations, setLocations] = useState([]);
  const config = useAuthHeaders();

  useEffect(() => {
    async function getLocations() {
      try {
        const response = await axios(
          `${process.env.REACT_APP_BACKEND_URL}/locations`,
          config
        );
        setLocations(response.data);
      } catch (error) {
        console.error("Get Error");
      }
    }
    getLocations();
  }, [config]);

  return locations.length === 0 ? (
    <h2>Loading locations....</h2>
  ) : (
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
