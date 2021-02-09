import useFavourites from "../../hooks/useFavourites";
import LocationsContainer from "../Location/LocationsContainer";
import { Link } from "react-router-dom";

function Favourites() {
  const { favourites } = useFavourites();

  return favourites.length > 0 ? (
    <LocationsContainer locations={favourites} />
  ) : (
    <>
      <h2>You haven't selected any favourites yet.</h2>
      <h4>
        Why not have a look through some great locations on the
        <Link to={`/`}>search page</Link> and click on the heart icon 🤍 to save
        them for reference.
      </h4>
    </>
  );
}

export default Favourites;
//
