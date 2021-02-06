import { useEffect, useState } from "react";
import axios from "axios";

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};

function useLocation(id) {
  const [location, setLocation] = useState({
    name: "",
    location_type_name: "",
    description: "",
    address: "",
    location_facilities_attributes: [],
  });

  useEffect(() => {
    async function getLocation() {
      try {
        const response = await axios(
          `${process.env.REACT_APP_BACKEND_URL}/locations/${id}`,
          config
        );
        setLocation(response.data);
      } catch (error) {
        console.error("Get Error");
      }
    }
    id && getLocation();
  }, [id]);

  async function removeLocation(reason) {
    try {
      await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/locations/${id}`,
        {
          ...config,
          data: { description: reason, location_id: id },
        }
      );
      setLocation(null);
    } catch (error) {
      // Work out what we need to do later...
      console.error("Remove Error");
    }
  }

  async function createLocation() {
    console.log({ location: location });
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/locations`,
        { location: location },
        config
      );

      setLocation(response.data);
    } catch (error) {
      // Work out what we need to do later...
      console.error("Create Error");
    }
  }

  async function updateLocation() {
    try {
      await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/locations/${id}`,
        location,
        config
      );
    } catch (error) {
      console.error("Update Error");
    }
  }

  return {
    location,
    removeLocation,
    setLocation,
    createLocation,
    updateLocation,
  };
}

export default useLocation;
