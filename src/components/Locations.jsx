import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalState } from "../utils/context";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { getLocations } from "../services/locationServices";

function Locations() {
  const { store, dispatch } = useGlobalState();
  const { locations } = store;
  const [selectedLocation, setSelectedLocation] = useState({});

  // On page load or change to dispatch, calls getLocations which sends a fetch request and returns a promise.
  // Promise is .then to call setLocations action with the returned locations.
  useEffect(() => {
    getLocations()
      .then((locations) => {
        dispatch({ type: "setLocations", data: locations });
        console.log(locations);
      })
      .catch((error) => console.log(error));
  }, [dispatch]);

  // To be refactored into styled components/css
  const mapStyles = {
    height: "500px",
    width: "1000px",
  };

  // If current position is not available, default is MEL CBD.
  const defaultCenter = {
    lat: -37.8136,
    lng: 144.9631,
  };

  const onSelect = (item) => {
    setSelectedLocation(item);
  };

  // Not sure if needs to be stored in state.
  const [currentPosition, setCurrentPosition] = useState({});
  const success = (position) => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    setCurrentPosition(currentPosition);
  };

  // On Page load,gwt position
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  });
  return (
    <>
      <h1>Locations</h1>
      <LoadScript googleMapsApiKey={`${process.env.REACT_APP_MAPS_API_KEY}`}>
        {/* Map itself */}
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          // If location lat (ie coordinates) are available, centers on location, otherwise centers on Melbourne city
          center={currentPosition.lat ? currentPosition : defaultCenter}
        >
          {/* Markers on the map for each location */}
          {locations.map((item) => {
            return (
              <Marker
                key={item.name}
                position={{ lat: item.latitude, lng: item.longitude }}
                onClick={() => onSelect(item)}
              />
            );
          })}

          {/* If user clicks on a location, dialogue box pops up with info and link to show page */}
          {selectedLocation.latitude && (
            <InfoWindow
              position={{
                lat: selectedLocation.latitude,
                lng: selectedLocation.longitude,
              }}
              clickable={true}
              onCloseClick={() => setSelectedLocation({})}
            >
              <>
                <p>{selectedLocation.name}</p>
                <Link to={`/locations/${selectedLocation.id}`}>
                  Show details
                </Link>
              </>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>

      {/* Once lications available, list all locations with shoe, edit, delete links. */}
      {locations &&
        locations.map((location, index) => {
          return (
            <div key={index}>
              <h1>{location.name}</h1>
              <h4>{location.address}</h4>
              <h4>{location.rating}</h4>
              <Link to={`/locations/${location.id}`}>Show details</Link>
              <Link to={`/locations/${location.id}/edit`}>Edit</Link>
              {/* <Link
                to={`/locations/${location.id}`}
                onClick={(e) => handleDeleteClick(e, location)}
              >
                Delete
              </Link> */}
            </div>
          );
        })}
    </>
  );
}

export default Locations;
