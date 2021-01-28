import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Locations() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/api/locations`)
      .then((res) => res.json())
      .then((data) => setLocations(data));
  }, []);

  console.log(locations);

  return (
    <>
      <h1>Locations</h1>
      {locations.map((location) => {
        return (
          <>
            <h1>{location.name}</h1>
            <h4>{location.address}</h4>
            <h4>{location.rating}</h4>
            <Link to={`/locations/${location.id}`}>Show details</Link>
          </>
        );
      })}
    </>
  );
}

export default Locations;
