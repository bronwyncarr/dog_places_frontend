import { AuthFetch } from "./authServices";
// import { useHistory } from "react-router-dom";

// Fetch requestion to get all locations
export async function getLocations() {
  const url = `${process.env.REACT_APP_BACKEND_URL}/locations`;
  const locations = await AuthFetch(url, "GET");
  return locations;
}

// Fetch requestion to get one location of the id that was passed in.
export async function getLocation(id) {
  const location = await AuthFetch(
    `${process.env.REACT_APP_BACKEND_URL}/locations/${id}`,
    "GET"
  );
  return location;
}

export async function getStaticAssets() {
  const staticAssets = await AuthFetch(
    `${process.env.REACT_APP_BACKEND_URL}/locations/static_assests`,
    "GET"
  );
  return staticAssets;
}

// Fetch requestion to get one location of the id that was passed in.
export async function removeLocation(id) {
  console.log(id);
  const location = await AuthFetch(
    `${process.env.REACT_APP_BACKEND_URL}/locations/${id}`,
    "DELETE"
  );
  console.log(location, "deleted");
  return location;
}

// export async function updateLocation(location) {
//   return location;
// }
