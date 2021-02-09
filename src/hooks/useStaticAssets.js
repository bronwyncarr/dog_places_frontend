import { useEffect, useState } from "react";
import axios from "axios";
import useAuthHeaders from "./useAuthHeaders";

// This function gets the static assets to be dynamically rendered on the form
function useStaticAssets() {
  const [staticAssets, setStaticAssets] = useState({});
  const config = useAuthHeaders();

  useEffect(() => {
    async function getStaticAssets() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/static_assests`,
          config
        );
        setStaticAssets(response.data);
      } catch (error) {
        console.error("Create Error");
      }
    }
    getStaticAssets();
  }, [config]);
  return staticAssets;
}
export default useStaticAssets;
