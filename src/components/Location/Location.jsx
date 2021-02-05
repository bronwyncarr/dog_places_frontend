import { Link, useParams, useHistory } from "react-router-dom";
import { useGlobalState } from "../../utils/context";
import Reviews from "../Reviews";
import ReviewItem from "../ReviewItem";
import average from "../../utils/reviewsAverage";
import LocationsFavouriteButton from "./LocationFavouriteButton";
import Map from "../Map";
import useLocation from "../../hooks/useLocation";

function Location(props) {
  const { id } = useParams();
  let history = useHistory();
  const { store } = useGlobalState();
  const { loggedInAdmin } = store;

  const { location, removeLocation } = useLocation(id);

  // To be refactored into styled components/css
  const mapStyles = {
    height: "500px",
    width: "500px",
  };

  // Async delays it until delete is complete before going back to locations
  async function handleDelete() {
    if (!loggedInAdmin) {
      let reason = prompt("Please give your reason");
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
        <h1>{location.name}</h1>
        <p>{location.address}</p>
        <LocationsFavouriteButton />
        <p>Average review: {average(location.reviews)}</p>
        <Map locations={[location]} />
        <br />
        <p>{location.description}</p>
        <Link to={`/locations/${location.id}/edit`}>Edit</Link>
        <button onClick={handleDelete}>Delete</button>
        <br />
        {/* Back link to goBack to index */}
        <Reviews reviews={location.reviews}>
          {location.reviews.map((review) => (
            <ReviewItem key={review.id} {...review} />
          ))}
        </Reviews>
        <Link
          to="/"
          onClick={() => {
            props.history.goBack();
          }}
        >
          Back
        </Link>
      </>
    )
  );
}

export default Location;
