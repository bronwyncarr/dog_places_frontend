import { useParams } from "react-router-dom";
import { createFavourite } from "../services/locationServices";

function FavouritesButton() {
  const { id } = useParams();
  async function handleClick() {
    const body = JSON.stringify({ favourite: { location_id: id } });
    await createFavourite(body);
    /// reload page somehow
  }
  return <button onClick={handleClick}>Favourite</button>;
}

export default FavouritesButton;
