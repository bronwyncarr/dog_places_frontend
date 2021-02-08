import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SearchBar from "./SearchBar";
import Map from "./Map";
import LocationsContainer from "./Location/LocationsContainer";
import NearMe from "./NearMe";
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

  const [distance, setDistance] = useState(5);
  const [currentPosition, setCurrentPosition] = useState({});

  // Callback function that takes the GeolocationPosition object as input.
  function success(pos) {
    setCurrentPosition({
      lat: pos.coords.latitude,
      lng: pos.coords.longitude,
    });
  }
  // On Page load, get position if it is available
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  });

  async function locationsNearMe(dist, lat, lng) {
    try {
      const response = await axios(
        `${process.env.REACT_APP_BACKEND_URL}/locations/nearme?description=${dist}&lat=${lat}&lng=${lng}`,
        config
      );
      console.log(response.data);
      // setLocations(response.data);
    } catch (error) {
      console.error("Get Error");
    }
  }

  function handleNearMeChange(e) {
    setDistance(e.target.value);
  }

  function handleNearMeSubmit(e) {
    e.preventDefault();
    locationsNearMe(distance, currentPosition.lat, currentPosition.lng);
  }

  // Handle change on form
  function handleSearchChange(e) {
    setSearchData(e.target.value);
  }

  // When form submitted,
  function handleSearchSubmit(e) {
    e.preventDefault();
    searchLocations();
    setSearchData("");
  }

  return locations.length === 0 ? (
    <h2>Loading locations....</h2>
  ) : (
    <>
      <h1>Locations</h1>
      <NearMe
        handleNearMeSubmit={handleNearMeSubmit}
        handleNearMeChange={handleNearMeChange}
        distance={distance}
      />
      <SearchBar
        handleSubmit={handleSearchSubmit}
        handleSearchChange={handleSearchChange}
        searchData={searchData}
      />
      {/* NOT SURE THIS WILL WORK!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
      <Link to={`/`}>Search All</Link>
      <Map locations={locations} />
      {/* Once locations available, list all locations with show, edit, delete links. */}
      <LocationsContainer locations={locations} />
    </>
  );
}

export default Locations;
