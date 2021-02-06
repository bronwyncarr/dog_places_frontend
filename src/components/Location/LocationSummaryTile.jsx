import { Link } from "react-router-dom";
import average from "../../utils/reviewsAverage";
import LocationFavouriteButton from "./LocationFavouriteButton";
import { useGlobalState } from "../../utils/context";

function LocationSummaryTile({
  location,
  favourite,
  addFavourite,
  removeFavourite,
}) {
  const { store } = useGlobalState();
  const { loggedInUser } = store;

  function handleClick() {
    favourite ? removeFavourite(location.id) : addFavourite(location.id);
  }

  return (
    <div>
      <h1>{location.name}</h1>
      <h4>{location.address}</h4>
      <h4>{location.rating}</h4>
      <p>{average(location.reviews)}</p>
      {loggedInUser && (
        <LocationFavouriteButton
          handleClick={handleClick}
          favourite={favourite}
        />
      )}
    </div>
  );
}

export default LocationSummaryTile;
