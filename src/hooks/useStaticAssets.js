import { useEffect, useState } from "react";
import axios from "axios";

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};

function useStaticAssets() {
  const [staticAssets, setStaticAssets] = useState({});

  useEffect(() => {
    async function getStaticAssets() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/locations/static_assests`,
          config
        );
        setStaticAssets(response.data);
      } catch (error) {
        console.error("Create Error");
      }
    }
    getStaticAssets();
  }, []);
  return staticAssets;
}
export default useStaticAssets;
