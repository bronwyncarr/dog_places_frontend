export default function reducer(state, action) {
  switch (action.type) {
    case "setLocations": {
      return {
        ...state,
        locations: action.data,
      };
    }

    // case "addLocation": {
    //   return {
    //     ...state,
    //     locations: [action.data, ...state.locations],
    //   };
    // }

    case "setStaticAssets": {
      return {
        ...state,
        staticAssets: action.data,
      };
    }

    // case "deleteLocation": {
    //   const updatedLocations = state.locations.filter((location) => {
    //     return location.id !== parseInt(action.data);
    //   });
    //   return {
    //     ...state,
    //     locations: updatedLocations,
    //   };
    // }
    // case "updateLocation": {
    //   const location = state.locations.find(
    //     (location) => location.id === action.data.id
    //   );
    //   const theRest = state.locations.filter(
    //     (location) => location.id !== action.data.id
    //   );
    //   const updatedLocation = Object.assign(location, action.data);
    //   return {
    //     ...state,
    //     locations: [updatedLocation, ...theRest],
    //   };
    // }
    case "setLoggedInUser": {
      return {
        ...state,
        loggedInUser: action.data,
      };
    }

    case "removeLoggedInUser": {
      return {
        ...state,
        loggedInUser: action.data,
      };
    }

    case "setLoggedInAdmin": {
      return {
        ...state,
        loggedInAdmin: action.data,
      };
    }
    // case "setToken": {
    //   return {
    //     ...state,
    //     auth: {
    //       ...state.auth,
    //       token: action.data,
    //     },
    //   };
    // }
    default:
      return state;
  }
}
