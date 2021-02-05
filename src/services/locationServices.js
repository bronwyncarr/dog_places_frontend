import { authFetch, authFetchNoResponse } from "./authServices";
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
  return response;
}

// Fetch requestion to get all favourites
export async function getFavourites() {
  const url = `${process.env.REACT_APP_BACKEND_URL}/locations/favorites/favourites`;
  const favourites = await authFetch(url, "GET");
  return favourites;
}
