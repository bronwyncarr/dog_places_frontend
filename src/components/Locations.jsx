import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./Search/SearchBar";
import Map from "./Map";
import LocationsContainer from "./Location/LocationsContainer";
import NearMe from "./Search/NearMeForm";
import useAuthHeaders from "../hooks/useAuthHeaders";
import styled from "styled-components/macro";
import useResize from "../hooks/useResize";

const LayoutContainer = styled.div`
  height: 80%;
  display: flex;
  align-items: stretch;
`;

const LocationsLayoutContainer = styled.div`
  width: 50%;
  overflow-y: auto;
`;

const MapContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitleLayoutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10%;
`;

const SearchbarLayoutContainer = styled.div`
  height: 10%;
`;

const Title = styled.h1`
  text-align: center;
  vertical-align: center;
`;

function Locations() {
  const [locations, setLocations] = useState([]);
  const config = useAuthHeaders();
  const [searchData, setSearchData] = useState("");
  const [searchErrorMsg, setSearchErrorMsg] = useState(null);
  const { el, width, height } = useResize();

  const mapSize = {
    width: `${width * 0.9}px`,
    height: `${height * 0.9}px`,
  };

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

  return (
    <>
      <TitleLayoutContainer>
        <Title>Locations</Title>
      </TitleLayoutContainer>
      <SearchbarLayoutContainer>
        <NearMe
          handleNearMeSubmit={handleNearMeSubmit}
          handleNearMeChange={handleNearMeChange}
          distance={distance}
        />
        <SearchBar
          handleSearchSubmit={handleSearchSubmit}
          handleSearchChange={handleSearchChange}
          searchData={searchData}
        />
        {searchErrorMsg && <p>{searchErrorMsg}</p>}
      </SearchbarLayoutContainer>
      <LayoutContainer>
        <MapContainer ref={el}>
          <Map size={mapSize} locations={locations} />
        </MapContainer>
        <LocationsLayoutContainer>
          <LocationsContainer locations={locations} />
        </LocationsLayoutContainer>
      </LayoutContainer>
    </>
  );
}

export default Locations;
