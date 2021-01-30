import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import AuthFetch from "../services/Authservices";
function Location(props) {
  const [location, setLocation] = useState([]);

  //implement useParams instead?
  const id = props.match.params.id;

  useEffect(() => {
    (async function () {
      const data = await AuthFetch(
        `${process.env.REACT_APP_BACKEND_URL}/locations/${id}`,
        "GET"
      );
      setLocation(data);
    })();
  }, [id]);

  // To be refactored into styled components/css
  const mapStyles = {
    height: "500px",
    width: "500px",
  };

  return (
    <>
      <h1>{location.name}</h1>
      <p>{location.address}</p>
      <LoadScript googleMapsApiKey={`${process.env.REACT_APP_MAPS_API_KEY}`}>
        {/* Map itself. Centers on the marker */}
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={{ lat: location.latitude, lng: location.longitude }}
        >
          {/* Markers on the map for each location */}
          <Marker
            key={location.name}
            position={{ lat: location.latitude, lng: location.longitude }}
          />
        </GoogleMap>
      </LoadScript>
      {/* Back link to goBack to index */}
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
