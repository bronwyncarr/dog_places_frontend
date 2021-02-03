import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getLocations } from "../services/locationServices";
import SearchBar from "./SearchBar";
import Map from "./Map";

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
      <SearchBar />
      <Map locations={locations} />
      {/* Once locations available, list all locations with show, edit, delete links. */}
      {locations &&
        locations.map((location, index) => {
          return (
            <div key={index}>
              <h1>{location.name}</h1>
              <h4>{location.address}</h4>
              <h4>{location.rating}</h4>
              <Link to={`/locations/${location.id}`}>Show details</Link>
            </div>
          );
        })}
    </>
  );
}

export default Locations;
