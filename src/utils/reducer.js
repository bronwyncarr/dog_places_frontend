export default function reducer(state, action) {
  switch (action.type) {
    case "setLoggedInUser": {
      return {
        ...state,
        loggedInUser: action.data.user,
        loggedInAdmin: action.data.admin,
      };
    }

    case "removeLoggedInUser": {
      return {
        ...state,
        loggedInUser: action.data,
        loggedInAdmin: action.data,
      };
    }

    default:
      return state;
  }
}
