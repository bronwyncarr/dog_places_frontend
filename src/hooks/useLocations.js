// import { useEffect, useState } from "react";
// import axios from "axios";
// import useAuthHeaders from "./useAuthHeaders";

// function useLocations() {
//   const [locations, setLocations] = useState([]);
//   // const [distance, setDistance] = useState(null);
//   const config = useAuthHeaders();

//   useEffect(() => {
//     async function getLocations() {
//       try {
//         const response = await axios(
//           `${process.env.REACT_APP_BACKEND_URL}/locations/`,
//           config
//         );
//         setLocations(response.data);
//       } catch (error) {
//         console.error("Get Error");
//       }
//     }
//     getLocations();
//   }, [config]);

//   async function locationsNearMe(currentPosition, distance) {
//     const lat = currentPosition.lat;
//     const lng = currentPosition.lng;
//     try {
//       const response = await axios(
//         `${process.env.REACT_APP_BACKEND_URL}/locations/nearme`,
//         {
//           ...config,
//           location: { coords: [lat, lng], description: distance },
//         }
//       );
//       setLocations(response.data);
//     } catch (error) {
//       // Work out what we need to do later...
//       console.error("Remove Error");
//     }
//   }

//   return {
//     locations,
//     locationsNearMe,
//   };
// }

// export default useLocations;
