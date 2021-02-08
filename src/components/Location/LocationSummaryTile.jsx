import average from "../../utils/reviewsAverage";
import LocationFavouriteButton from "./LocationFavouriteButton";
import { useGlobalState } from "../../utils/context";
import FacilityList from "./FacilityList";
import { Wrapper } from "../../styles/tileStyles";
import capitaliseName from "../../utils/capitaliseName";
import styled from "styled-components/macro";

const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

function LocationSummaryTile({
  location,
  favourite,
  addFavourite,
  removeFavourite,
  children,
}) {
  const { store } = useGlobalState();
  const { loggedInUser } = store;

  function handleClick() {
    favourite ? removeFavourite(location.id) : addFavourite(location.id);
  }

  return (
    <Wrapper>
      <HeadingContainer>
        <h1>{capitaliseName(location.name)}</h1>
        {loggedInUser && (
          <LocationFavouriteButton
            handleClick={handleClick}
            favourite={favourite}
          />
        )}
      </HeadingContainer>
      <h4>{location.location_type_name}</h4>
      <h4>{capitaliseName(location.address)}</h4>
      <h4>{location.rating}</h4>
      <FacilityList facilities={location.location_facilities_attributes} />
      <p>{average(location.reviews)}</p>
      {children}
    </Wrapper>
  );
}

export default LocationSummaryTile;
