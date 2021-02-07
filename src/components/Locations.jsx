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
  const [searchData, setSearchData] = useState("");

  // Use effect runs on to get all locations information to display
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

  // If the form is submitted, a GET request with query params is sent to search by name
  async function searchLocations() {
    try {
      const response = await axios(
        `${process.env.REACT_APP_BACKEND_URL}/locations?name=${searchData}`,
        config
      );
      setLocations(response.data);
    } catch (error) {
      console.error("Get Error");
    }
  }

  // Handle change on form
  function handleChange(e) {
    setSearchData(e.target.value);
  }

  // When form submitted,
  function handleSubmit(e) {
    e.preventDefault();
    searchLocations();
    setSearchData("");
  }

  return locations.length === 0 ? (
    <h2>Loading locations....</h2>
  ) : (
    <>
      <h1>Locations</h1>
      {/* <NearMe setLocations={setLocations} /> */}
      <SearchBar
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        searchData={searchData}
      />
      <Map locations={locations} />
      {/* Once locations available, list all locations with show, edit, delete links. */}
      <LocationsContainer locations={locations} />
    </>
  );
}

export default Locations;
