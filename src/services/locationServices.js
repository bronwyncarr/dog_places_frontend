import { authFetch } from "./authServices";
// import { useHistory } from "react-router-dom";

// Fetch requestion to get all locations
export async function getLocations() {
  const url = `${process.env.REACT_APP_BACKEND_URL}/locations`;
  const locations = await authFetch(url, "GET");
  return locations;
}

export async function getStaticAssets() {
  const staticAssets = await authFetch(
    `${process.env.REACT_APP_BACKEND_URL}/locations/static_assests`,
    "GET"
  );
  return staticAssets;
}
