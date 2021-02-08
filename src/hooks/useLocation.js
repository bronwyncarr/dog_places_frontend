import { useEffect, useState } from "react";
import axios from "axios";
import useAuthHeaders from "./useAuthHeaders";

function useLocation(id) {
  const config = useAuthHeaders();
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
      try {
        console.log("go");
        const reviewResponse = await axios(
          `${process.env.REACT_APP_BACKEND_URL}/reviews?location_id=${id}`,
          config
        );
        console.log("rev", reviewResponse.data);
        // setLocation({ ...location, reviewDate: reviewResponse.data });
        // console.log(location);
      } catch (error) {
        console.error("Get Error");
      }
    }
    id && getLocation();
  }, [config, id]);

  async function removeLocation(reason) {
    try {
      await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/locations/${id}`,
        {
          ...config,
          data: { description: reason, location_id: id, location: location },
        }
      );
      setLocation(null);
    } catch (error) {
      // Work out what we need to do later...
      console.error("Remove Error");
    }
  }

  async function createLocation() {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/locations`,
        {
          location: {
            name: location.name,
            location_type_name: location.location_type_name,
            description: location.description,
            address: location.address,
            location_facilities_attributes:
              location.location_facilities_attributes,
          },
        },
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
        {
          location: {
            name: location.name,
            location_type_name: location.location_type_name,
            description: location.description,
            address: location.address,
            location_facilities_attributes:
              location.location_facilities_attributes,
          },
        },
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
