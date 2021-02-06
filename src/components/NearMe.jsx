// import { useState, useEffect } from "react";
// import axios from "axios";

// const config = {
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${localStorage.getItem("token")}`,
//   },
// };

// function NearMe({ setLocations }) {
//   const [distance, setDistance] = useState(5);
//   const [currentPosition, setCurrentPosition] = useState({});

//   // Callback function that takes the GeolocationPosition object as input.
//   function success(pos) {
//     setCurrentPosition({
//       lat: pos.coords.latitude,
//       lng: pos.coords.longitude,
//     });
//   }

//   // On Page load, get position if it is available
//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(success);
//   });

//   useEffect(() => {
//     async function locationsNearMe() {
//       const { lat, lng } = currentPosition;
//       console.log(lat, lng, distance);
//       try {
//         const response = await axios(
//           `${process.env.REACT_APP_BACKEND_URL}/locations/nearme`,
//           {
//             ...config,
//             data: { location: { coords: [lat, lng], description: distance } },
//           }
//         );
//         setLocations(response.data);
//       } catch (error) {
//         // Work out what we need to do later...
//         console.error("Get Locations Near Me Error");
//       }
//     }
//     locationsNearMe();
//   }, [distance, setLocations]);

//   function handleChange(e) {
//     setDistance(parseInt(e.target.value));
//   }

//   return (
//     <form>
//       <label htmlFor="distance">Select a distance:</label>
//       <select
//         name="distance"
//         id="distance"
//         value={distance}
//         onChange={handleChange}
//       >
//         <option value="5">5</option>
//         <option value="10">10</option>
//         <option value="20">20</option>
//         <option value="50">50</option>
//       </select>
//       <button id="submit" type="submit" value="Submit">
//         Find near me!
//       </button>
//     </form>
//   );
// }

// export default NearMe;
