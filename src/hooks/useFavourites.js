import { useEffect, useState } from "react";
import axios from "axios";
import useAuthHeaders from "./useAuthHeaders";
import { useGlobalState } from "../utils/context";

// This function gets the users favourites and returns a method to add and delete favourites.
function useFavourites() {
  const [favourites, setFavourites] = useState([]);
  const config = useAuthHeaders();
  const { store } = useGlobalState();

  useEffect(() => {
    const { loggedInUser } = store;
    async function getFavourite() {
      try {
        const response = await axios(
          `${process.env.REACT_APP_BACKEND_URL}/favourites`,
          config
        );
        setFavourites(response.data);
      } catch (error) {
        console.error("Get Error");
      }
    }
    loggedInUser && getFavourite();
  }, [config, store]);

  async function removeFavourite(id) {
    try {
      await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/favourites/${id}`,
        {
          ...config,
          data: { location_id: id },
        }
      );

      const response = await axios(
        `${process.env.REACT_APP_BACKEND_URL}/favourites`,
        config
      );

      setFavourites(response.data);
    } catch (error) {
      console.error("Remove Error");
    }
  }

  async function addFavourite(id) {
    try {
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/favourites`,
        { location_id: id },
        config
      );

      const response = await axios(
        `${process.env.REACT_APP_BACKEND_URL}/favourites`,
        config
      );

      setFavourites(response.data);
    } catch (error) {
      console.error("Create Error");
    }
  }

  return { favourites, addFavourite, removeFavourite };
}

export default useFavourites;
