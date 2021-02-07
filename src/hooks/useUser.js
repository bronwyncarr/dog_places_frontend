import { useState } from "react";
import { useGlobalState } from "../utils/context";
import axios from "axios";
import useAuthHeaders from "./useAuthHeaders";

function useUser() {
  const config = useAuthHeaders();

  // Sets the state of user object, error and success boolean.
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const { dispatch } = useGlobalState();

  // Determines url based on whether sign in/up
  function createAuthContext(endpoint) {
    let url;
    switch (endpoint) {
      case "sign_in":
        url = `${process.env.REACT_APP_BACKEND_URL}/auth/sign_in`;
        break;

      case "sign_up":
        url = `${process.env.REACT_APP_BACKEND_URL}/auth/sign_up`;
        break;
      default:
        throw Error("incorrect endpoints provided");
    }

    return async function authFunction() {
      try {
        const response = await axios.post(url, {
          config,
          user,
        });
        const { is_admin, username, jwt } = response.data;
        localStorage.setItem("token", jwt);

        dispatch({ type: "setLoggedInUser", data: username });
        dispatch({ type: "setLoggedInAdmin", data: is_admin });
        setSuccess(true);
        // Catch handles 404, 422 and any other error
      } catch (error) {
        if (error.response) {
          switch (error.response.status) {
            // Not Found
            case 404:
              setError(
                "Incorrect credential. Please check your username, password and try again."
              );
              break;
            // Unable to process (may already exist)
            case 422:
              setError(
                "That username or email already exists in our system. Please choose another."
              );
              break;
            default:
              setError("Unknown error occured, please try again later.");
              break;
          }
        } else if (error.request) {
          // The request was made but no response was received
          console.log("No response from the server...");
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
      }
    };
  }

  // This calls the createAuthContext function and passes in the type or request (sign in/up)
  const createUser = createAuthContext("sign_up");
  const signIn = createAuthContext("sign_in");

  return { user, error, success, setUser, createUser, signIn };
}

export default useUser;
