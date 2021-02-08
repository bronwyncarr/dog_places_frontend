import average from "../../utils/reviewsAverage";
import LocationFavouriteButton from "./LocationFavouriteButton";
import { useGlobalState } from "../../utils/context";
import FacilityList from "./FacilityList";
import { Wrapper } from "../../styles/tileStyles";

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
      <h1>
        <i className="fas fa-map-marker-alt"></i> {location.name}
      </h1>
      <h4>{location.location_type_name}</h4>
      <h4>{location.address}</h4>
      <h4>{location.rating}</h4>
      <FacilityList facilities={location.location_facilities_attributes} />
      <p>{average(location.reviews)}</p>
      {loggedInUser && (
        <LocationFavouriteButton
          handleClick={handleClick}
          favourite={favourite}
        />
      )}
      {children}
    </Wrapper>
  );
}

export default LocationSummaryTile;
