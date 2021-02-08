import LocationSummaryTile from "./LocationSummaryTile";
import useFavourites from "../../hooks/useFavourites";
import { Link } from "react-router-dom";

function LocationsContainer({ locations }) {
  const { favourites, addFavourite, removeFavourite } = useFavourites();
  const favouriteIds = favourites.map((fave) => fave.id);

  return (
    <div>
      {/* Once locations available, list all locations with show, edit, delete links. */}
      {locations &&
        locations.map((location) => {
          return (
            <LocationSummaryTile
              // Heart icon to add/delete favourite.
              addFavourite={addFavourite}
              removeFavourite={removeFavourite}
              key={location.id}
              location={location}
              // Includes returns a boolean if the value is in the array.
              favourite={favouriteIds.includes(location.id)}
            >
              {/* Passed in as children to the index and favourites page, not to the show. */}
              <Link to={`/locations/${location.id}`}>Show details</Link>
            </LocationSummaryTile>
          );
        })}
    </div>
  );
}

export default LocationsContainer;
