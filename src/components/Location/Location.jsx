import { Link, useParams, useHistory } from "react-router-dom";
import { useGlobalState } from "../../utils/context";
import Reviews from "../Reviews/Reviews";
import ReviewItem from "../Reviews/ReviewItem";
import average from "../../utils/reviewsAverage";
import Map from "../Map";
import useLocation from "../../hooks/useLocation";
import useFavourites from "../../hooks/useFavourites";
import LocationSummaryTile from "./LocationSummaryTile";
import useResize from "../../hooks/useResize";
import styled from "styled-components/macro";

const MapLayoutContainer = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Location() {
  const { id } = useParams();
  let history = useHistory();
  const { store } = useGlobalState();
  const { loggedInAdmin } = store;

  const { location, removeLocation } = useLocation(id);
  const { favourites, addFavourite, removeFavourite } = useFavourites();
  const favouriteIds = favourites.map((fave) => fave.id);
  const { el, width, height } = useResize();

  const mapSize = {
    width: `${width * 0.7}px`,
    height: `${height * 0.7}px`,
  };

  // Async delays it until delete is complete before going back to locations
  async function handleDelete() {
    if (!loggedInAdmin) {
      let reason = prompt(
        "Please let us know why you would like this deleted..."
      );
      await removeLocation(reason);
    } else {
      // If admin delete
      await removeLocation();
    }
    history.push("/");
  }

  return (
    location &&
    location.name && (
      <>
        <LocationSummaryTile
          addFavourite={addFavourite}
          removeFavourite={removeFavourite}
          key={location.id}
          location={location}
          
          // includes returns a boolean if the value is in the array
          favourite={favouriteIds.includes(location.id)}
        />
        <p>Average review: {average(location.reviews)}</p>
        {/* Location is put in an array for consistency so they map can be reused for one (here) or many locations (index pg)*/}
        <MapLayoutContainer ref={el}>
          <Map size={mapSize} locations={[location]} />
        </MapLayoutContainer>
        <br />
        <p>{location.description}</p>
        <Link to={`/locations/${location.id}/edit`} data-testid='editLocation'>Edit</Link>
        <button data-testid="delete" onClick={handleDelete}>Delete</button>
        <br />
        <Reviews reviews={location.reviewsData}>
          {location.reviewsData.map((review) => (
            <ReviewItem key={review.id} {...review} />
          ))}
        </Reviews>
        <Link to="/">Back</Link>
      </>
    )
  );
}

export default Location;
