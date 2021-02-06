import { useState, useEffect } from "react";
import useLocations from "../hooks/useLocations";

function NearMe() {
  const [distance, setdistance] = useState(5);
  const { locationsNearMe } = useLocations();
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

  function handleChange(e) {
    setdistance(parseInt(e.target.value));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      typeof currentPosition.lat === "number" &&
      typeof currentPosition.lng === "number"
    ) {
      locationsNearMe(currentPosition, distance);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="distance">Select a distance:</label>
      <select
        name="distance"
        id="distance"
        value={distance}
        onChange={handleChange}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </select>
      <button id="submit" type="submit" value="Submit">
        Find near me!
      </button>
    </form>
  );
}

export default NearMe;
