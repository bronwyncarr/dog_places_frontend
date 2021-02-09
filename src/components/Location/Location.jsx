import { Link, useParams, useHistory } from "react-router-dom";
import { useGlobalState } from "../../utils/context";
import Reviews from "../Reviews/Reviews";
import ReviewItem from "../Reviews/ReviewItem";
import Map from "../Map";
import useLocation from "../../hooks/useLocation";
import useFavourites from "../../hooks/useFavourites";
import LocationSummaryTile from "./LocationSummaryTile";
import useResize from "../../hooks/useResize";
import styled from "styled-components/macro";
import { Button, ButtonLink } from "../../styles/Layout";

const MapLayoutContainer = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-right: 4rem;
`;

export const TextLayoutContainer = styled.div`
  width: 50%;
  overflow-y: auto;
`;

const ContentContainer = styled.div`
  padding: 1rem;
  display: flex;
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
    width: `${width}px`,
    height: `${height}px`,
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
        >
          {/* Location is put in an array for consistency so they map can be reused for one (here) or many locations (index pg)*/}
          <ContentContainer>
            <MapLayoutContainer ref={el}>
              <Map size={mapSize} locations={[location]} />
            </MapLayoutContainer>
            <TextLayoutContainer>
              <p>{location.description}</p>
              <ButtonLink to="/">Back</ButtonLink>
              <ButtonLink to={`/locations/${location.id}/edit`}>
                Edit
              </ButtonLink>
              <Button onClick={handleDelete}>Delete</Button>
              <Reviews reviews={location.reviewsData}>
                {location.reviewsData.map((review) => (
                  <ReviewItem key={review.id} {...review} />
                ))}
              </Reviews>
            </TextLayoutContainer>
          </ContentContainer>
        </LocationSummaryTile>
      </>
    )
  );
}

export default Location;
