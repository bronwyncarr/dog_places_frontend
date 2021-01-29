import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fetchData from "../helpers/fetchData";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function Location(props) {
  const mapStyles = {
    height: "500px",
    width: "500px",
  };

  const defaultCenter = {
    lat: -37.8136,
    lng: 144.9631,
  };

  const [location, setLocation] = useState([]);
  const id = props.match.params.id;

  useEffect(() => {
    (async function () {
      const data = await fetchData(
        `${process.env.REACT_APP_BACKEND_URL}/locations/${id}`
      );
      setLocation(data);
    })();
  }, [id]);

  console.log(location);

  return (
    <>
      <h1>{location.name}</h1>
      <p>{location.address}</p>
      <LoadScript googleMapsApiKey={`${process.env.REACT_APP_API_KEY}`}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        >
          <Marker
            key={location.name}
            position={{ lat: location.latitude, lng: location.longitude }}
          />
        </GoogleMap>
      </LoadScript>
      <Link
        to="/"
        onClick={(e) => {
          props.history.goBack();
        }}
      >
        Back
      </Link>
    </>
  );
}

export default Location;
