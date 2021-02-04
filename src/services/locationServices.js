import { authFetch, authFetchNoResponse } from "./authServices";
// import { useHistory } from "react-router-dom";

// Fetch requestion to get all locations
export async function getLocations() {
  const url = `${process.env.REACT_APP_BACKEND_URL}/locations`;
  const locations = await authFetch(url, "GET");
  return locations;
}

// Fetch requestion to get one location of the id that was passed in.
export async function getLocation(id) {
  const location = await authFetch(
    `${process.env.REACT_APP_BACKEND_URL}/locations/${id}`,
    "GET"
  );
  return location;
}

export async function getStaticAssets() {
  const staticAssets = await authFetch(
    `${process.env.REACT_APP_BACKEND_URL}/locations/static_assests`,
    "GET"
  );
  return staticAssets;
}

// Fetch requestion to get one location of the id that was passed in.
export async function removeLocation(id, body) {
  const response = await authFetchNoResponse(
    `${process.env.REACT_APP_BACKEND_URL}/locations/${id}`,
    "DELETE",
    body
  );
  return response;
}

export async function createReview(body) {
  const response = await authFetchNoResponse(
    `${process.env.REACT_APP_BACKEND_URL}/locations/review/new`,
    "POST",
    body
  );
  return response;
}

export async function createFavourite(body) {
  const response = await authFetchNoResponse(
    `${process.env.REACT_APP_BACKEND_URL}/locations/favorites/new`,
    "POST",
    body
  );
  console.log(body);
  return response;
}

// Fetch requestion to get all favourites
export async function getFavourites() {
  const url = `${process.env.REACT_APP_BACKEND_URL}/locations/favorites/favourites`;
  const favourites = await authFetch(url, "GET");
  return favourites;
}
