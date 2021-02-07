import { useEffect, useState } from "react";
import axios from "axios";

function useFavourites() {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    async function getFavourite() {
      try {
        const response = await axios(
          `${process.env.REACT_APP_BACKEND_URL}/favourites`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setFavourites(response.data);
      } catch (error) {
        console.error("Get Error");
      }
    }
    getFavourite();
  }, []);

  async function removeFavourite(id) {
    try {
      await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/favourites/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          data: { location_id: id },
        }
      );

      const response = await axios(
        `${process.env.REACT_APP_BACKEND_URL}/favourites`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setFavourites(response.data);
    } catch (error) {
      // Work out what we need to do later...
      console.error("Remove Error");
    }
  }

  async function addFavourite(id) {
    try {
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/favourites`,
        { location_id: id },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const response = await axios(
        `${process.env.REACT_APP_BACKEND_URL}/favourites`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setFavourites(response.data);

      // setLocation(response.data);
    } catch (error) {
      // Work out what we need to do later...
      console.error("Create Error");
    }
  }

  return { favourites, addFavourite, removeFavourite };
}

export default useFavourites;
