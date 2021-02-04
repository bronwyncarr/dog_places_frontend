import { useEffect, useState } from "react";
import useFavourites from "../../hooks/useFavourites";
import LocationsContainer from "../Location/LocationsContainer";

function Favourites() {
  const { favourites } = useFavourites();
  return <LocationsContainer locations={favourites} />;
}

export default Favourites;
//
