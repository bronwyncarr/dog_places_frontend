import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

function Map({ locations, size, radius }) {
  // Selected location is once a user clicks on a ion, a info box will appear.
  const [selectedLocation, setSelectedLocation] = useState({});

  // Not sure if needs to be stored in state.
  const [currentPosition, setCurrentPosition] = useState({});
  function success(pos) {
    setCurrentPosition({
      lat: pos.coords.latitude,
      lng: pos.coords.longitude,
    });
  }

  // If there is only one location, the map centers on it (ie in the show page)
  // Otherwise the map centers on the current location if it is available
  // Otherwise thte map centers on MEL CBD
  function calculateCenter() {
    if (locations.length === 1) {
      return { lat: locations[0].latitude, lng: locations[0].longitude };
    } else if (currentPosition.lat) {
      return currentPosition;
    } else {
      return { lat: -37.8136, lng: 144.9631 };
    }
  }
  calculateCenter();

  // Default radius is set in state in Locations to 5.
  // If the user sets a radius in the search box, the map size will zoom in or out to approx match the radius.
  function calculateZoom() {
    if (radius === 5) {
      return 13;
    } else if (radius === 10 || radius === 20) {
      return 12;
    } else {
      return 11;
    }
  }

  // On Page load,get position
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  return (
    locations?.length > 0 && (
      // Stores google API key on server for security. Key is passed in with location/s.
      <LoadScript googleMapsApiKey={`${locations[0]["google"]}`}>
        <GoogleMap
          mapContainerStyle={size}
          zoom={calculateZoom()}
          // If location lat (ie coordinates) are available, centers on location, otherwise centers on Melbourne city
          center={calculateCenter()}
        >
          {/* Markers on the map for each location */}
          {locations.map((item) => {
            return (
              item.latitude && (
                <Marker
                  key={item.id}
                  position={{ lat: item.latitude, lng: item.longitude }}
                  onClick={() => setSelectedLocation(item)}
                />
              )
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
    )
  );
}

export default Map;
