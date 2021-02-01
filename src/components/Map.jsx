import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalState } from "../utils/context";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

function Map() {
  const { store } = useGlobalState();
  const { locations } = store;
  // Selected location is once a user clicks on a ion, a info box will appear.
  const [selectedLocation, setSelectedLocation] = useState({});

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
    <LoadScript googleMapsApiKey={`${process.env.REACT_APP_MAPS_API_KEY}`}>
      {/* Map itself */}
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        // If location lat (ie coordinates) are available, centers on location, otherwise centers on Melbourne city
        center={currentPosition.lat ? currentPosition : defaultCenter}
      >
        {/* Markers on the map for each location */}
        {locations &&
          locations.map((item) => {
            return (
              <Marker
                key={item.name}
                position={{ lat: item.latitude, lng: item.longitude }}
                onClick={() => setSelectedLocation(item)}
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
              <Link to={`/locations/${selectedLocation.id}`}>Show details</Link>
            </>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
