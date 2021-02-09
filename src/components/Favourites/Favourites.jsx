import useFavourites from "../../hooks/useFavourites";
import LocationsContainer from "../Location/LocationsContainer";
import { Link } from "react-router-dom";
import { Notification } from "../../styles/Layout";

// Depending on if the user has any favourites, it will either render a list in the tile format or a notification with a link to do so.
function Favourites() {
  const { favourites } = useFavourites();

  return favourites.length > 0 ? (
    <LocationsContainer locations={favourites} />
  ) : (
    <Notification>
      <h2>You haven't selected any favourites yet.</h2>
      <h4>
        Why not have a look through some great locations on the
        <Link to={`/`}>search page</Link> and click on the heart icon 🤍 to save
        them for reference.
      </h4>
    </Notification>
  );
}

export default Favourites;
//
