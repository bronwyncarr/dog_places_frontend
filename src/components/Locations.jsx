import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobalState } from "../utils/context";
import { getLocations } from "../services/locationServices";
import Map from "./Map";

function Locations() {
  const { store, dispatch } = useGlobalState();
  const { locations } = store;

  // On page load or change to dispatch, calls getLocations which sends a fetch request and returns a promise.
  // Promise is .then to call setLocations action with the returned locations.
  useEffect(() => {
    getLocations()
      .then((locations) => {
        dispatch({ type: "setLocations", data: locations });
      })
      .catch((error) => console.log(error));
  }, [dispatch]);

  return (
    <>
      <h1>Locations</h1>
      <Map />
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
