export default function reducer(state, action) {
  switch (action.type) {
    case "setLocations": {
      return {
        ...state,
        locations: action.data,
      };
    }

    case "addLocation": {
      return {
        ...state,
        locations: [action.data, ...state.locations],
      };
    }

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
