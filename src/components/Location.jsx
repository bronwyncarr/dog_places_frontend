import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useGlobalState } from "../utils/context";
import { getLocation } from "../services/locationServices";

function Location(props) {
  const [location, setLocation] = useState(null);
  const { id } = useParams();
  const { store, dispatch } = useGlobalState();
  const { loggedInUser } = store;

  useEffect(() => {
    getLocation(id)
      .then((location) => setLocation(location))
      .catch((error) => console.log(error));
  }, [id]);

  // To be refactored into styled components/css
  const mapStyles = {
    height: "500px",
    width: "500px",
  };

  return (
    location && (
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
    )
  );
}

export default Location;
