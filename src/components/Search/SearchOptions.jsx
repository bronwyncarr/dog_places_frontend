import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import NearMe from "./NearMeForm";
import useAuthHeaders from "../../hooks/useAuthHeaders";
import styled from "styled-components/macro";

const SearchbarLayoutContainer = styled.div``;

function SearchOptions({ setLocations, setRadius, radius }) {
  const config = useAuthHeaders();
  const [searchData, setSearchData] = useState("");
  const [searchErrorMsg, setSearchErrorMsg] = useState(null);

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

  async function locationsNearMe(radius, lat, lng) {
    try {
      const response = await axios(
        `${process.env.REACT_APP_BACKEND_URL}/locations/nearme?distance=${radius}&lat=${lat}&lng=${lng}`,
        config
      );
      if (response.data && response.data.length > 0) {
        setLocations(response.data);
        setSearchErrorMsg(null);
      } else {
        setSearchErrorMsg(
          "Sorry, no locations within your requested search distance."
        );
      }
    } catch (error) {
      console.error("Get Error");
    }
  }

  function handleNearMeChange(e) {
    setRadius(e.target.value);
  }

  function handleNearMeSubmit(e) {
    e.preventDefault();
    locationsNearMe(radius, currentPosition.lat, currentPosition.lng);
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

  return (
    <SearchbarLayoutContainer>
      <NearMe
        handleNearMeSubmit={handleNearMeSubmit}
        handleNearMeChange={handleNearMeChange}
        distance={radius}
      />
      <SearchBar
        handleSearchSubmit={handleSearchSubmit}
        handleSearchChange={handleSearchChange}
        searchData={searchData}
      />
      {searchErrorMsg && <p>{searchErrorMsg}</p>}
    </SearchbarLayoutContainer>
  );
}

export default SearchOptions;
