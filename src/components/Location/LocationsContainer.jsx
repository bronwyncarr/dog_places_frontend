import LocationSummaryTile from "./LocationSummaryTile";
import useFavourites from "../../hooks/useFavourites";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

const Container = styled.div`
  width: 100%;
  overflow-y: auto;
`;

function LocationsContainer({ locations }) {
  const { favourites, addFavourite, removeFavourite } = useFavourites();
  const favouriteIds = favourites.map((fave) => fave.id);

  return (
    <Container>
      {/* Once locations available, list all locations with show, edit, delete links. */}
      {locations &&
        locations.map((location) => {
          return (
            <LocationSummaryTile
              addFavourite={addFavourite}
              removeFavourite={removeFavourite}
              key={location.id}
              location={location}
              // includes returns a boolean if the value is in the array
              favourite={favouriteIds.includes(location.id)}
            >
              <Link to={`/locations/${location.id}`}>Show details</Link>
            </LocationSummaryTile>
          );
        })}
    </Container>
  );
}

export default LocationsContainer;
