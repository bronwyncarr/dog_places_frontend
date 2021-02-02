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
  console.log(location);
  return location;
}

export async function getStaticAssets() {
  const staticAssets = await AuthFetch(
    `${process.env.REACT_APP_BACKEND_URL}/locations/static_assests`,
    "GET"
  );

  return staticAssets;
}

// export async function createLocation(body) {
//   // let history = useHistory()
//   try {
//     // POST request on submit, then redirect to locations pg.
//     await fetch(`${process.env.REACT_APP_BACKEND_URL}/locations`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//       body: body,
//     });
//     // history.push("/locations");
//   } catch (err) {
//     console.log(err.message);
//   }
// }

// export async function deleteLocation(id) {
//   return id;
// }

// export async function updateLocation(location) {
//   return location;
// }
