import { useEffect, useState } from "react";
import { getFavourites } from "../services/locationServices";

function Favourites() {
  const [favourites, setFavourites] = useState([]);
  useEffect(() => {
    getFavourites()
      .then((favourites) => {
        console.log(favourites);
      })
      .catch((error) => console.log(error));
  }, []);

  return <h1> Favourites</h1>;
}

export default Favourites;
//
