import { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { getLocation, removeLocation } from "../services/locationServices";
import Locations from "./Locations";

function Location(props) {
  const [location, setLocation] = useState(null);
  const { id } = useParams();
  let history = useHistory();

  // On page load or a change to id, calls getLocation with the id from useParams,
  // This sends a fetch request for the location with that id and returns a promise.
  // Promise is .then to call setLocation action with the returned location with that id.
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

  // What about if location doesn't exist????

  function handleDelete() {
    removeLocation(id);
    history.push("/locations");
  }

  return (
    location && (
      <>
        <h1>{location.name}</h1>
        <p>{location.address}</p>
        <LoadScript googleMapsApiKey={`${process.env.REACT_APP_MAPS_API_KEY}`}>
          {/* Map itself. Centers on the marker */}
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={10}
            center={{ lat: location.latitude, lng: location.longitude }}
          >
            {/* Markers on the map for each location */}
            <Marker
              key={location.name}
              position={{ lat: location.latitude, lng: location.longitude }}
            />
          </GoogleMap>
        </LoadScript>
        <br />
        <p>{location.descrription}</p>
        <Link to={`/locations/${location.id}/edit`}>Edit</Link>
        <button onClick={handleDelete}>Delete</button>
        <br />
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
