import AuthFetch from "./Authservices";

export async function getLocations() {
  const url = `${process.env.REACT_APP_BACKEND_URL}/locations`;
  const locations = await AuthFetch(url, "GET");
  return locations;
}

export async function getLocation(id) {
  const location = await AuthFetch(
    `${process.env.REACT_APP_BACKEND_URL}/locations/${id}`,
    "GET"
  );
  return location;
}
