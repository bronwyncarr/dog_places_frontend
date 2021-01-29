import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import fetchData from "../helpers/fetchData";

function Locations() {
  const [locations, setLocations] = useState([]);

  const mapStyles = {
    height: "500px",
    width: "500px",
  };

  const defaultCenter = {
    lat: -37.8136,
    lng: 144.9631,
  };

  async function fetchLocations() {
    const url = `${process.env.REACT_APP_BACKEND_URL}/locations`;
    const data = await fetchData(url);
    setLocations(data);
  }

  useEffect(() => {
    fetchLocations();
  }, []);

  async function handleDeleteClick(e, location) {
    try {
      e.preventDefault();
      if (window.confirm("Are you sure you would like to delete?")) {
        await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/locations/${location.id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        fetchLocations();
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <>
      <h1>Locations</h1>
      <LoadScript googleMapsApiKey={`${process.env.REACT_APP_API_KEY}`}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={8}
          center={defaultCenter}
        >
          {locations.map((item) => {
            return (
              <Marker
                key={item.name}
                position={{ lat: item.latitude, lng: item.longitude }}
              />
            );
          })}
        </GoogleMap>
      </LoadScript>

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
