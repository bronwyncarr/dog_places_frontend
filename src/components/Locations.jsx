import { useEffect, useState } from "react";
import { getLocations } from "../services/locationServices";
import SearchBar from "./SearchBar";
import Map from "./Map";
import LocationsContainer from "./Location/LocationsContainer";
import NearMe from "./NearMe";

function Locations() {
  const [locations, setLocations] = useState([]);

  // On page load or change to dispatch, calls getLocations which sends a fetch request and returns a promise.
  // Promise is .then to call setLocations action with the returned locations.
  useEffect(() => {
    getLocations()
      .then((locations) => {
        setLocations(locations);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1>Locations</h1>
      <NearMe />
      <SearchBar />
      <Map locations={locations} />
      {/* Once locations available, list all locations with show, edit, delete links. */}
      <LocationsContainer locations={locations} />
    </>
  );
}

export default Locations;
