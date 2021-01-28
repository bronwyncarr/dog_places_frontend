import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import fetchData from "../helpers/fetchData";

function Locations() {
  const [locations, setLocations] = useState([]);

  async function fetchLocations() {
    const data = await fetchData("http://localhost:3000/api/locations");
    setLocations(data);
  }

  useEffect(() => {
    fetchLocations();
  }, []);

  async function handleDeleteClick(e, location) {
    try {
      e.preventDefault();
      if (window.confirm("Are you sure you would like to delete?")) {
        await fetch(`http://localhost:3000/api/locations/${location.id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        fetchLocations();
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <>
      <h1>Locations</h1>
      {locations &&
        locations.map((location, index) => {
          return (
            <div key={index}>
              <h1>{location.name}</h1>
              <h4>{location.address}</h4>
              <h4>{location.rating}</h4>
              <Link to={`/locations/${location.id}`}>Show details</Link>
              <Link to={`/locations/${location.id}/edit`}>Edit</Link>
              <Link
                to={`/locations/${location.id}`}
                onClick={(e) => handleDeleteClick(e, location)}
              >
                Delete
              </Link>
            </div>
          );
        })}
    </>
  );
}

export default Locations;
