import { useState } from "react";
import { useGlobalState } from "../utils/context";
import axios from "axios";

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};

function useUser() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const { dispatch } = useGlobalState();

  /**
   *
   * @param {"sign_in"|"sign_up"} endpoint
   */
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
      } catch (error) {
        if (error.response) {
          switch (error.response.status) {
            case 404:
              setError(
                "Incorrect credential. Please check your username, password and try again."
              );
              break;
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
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log("No response from the server...");
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
      }
    };
  }

  const createUser = createAuthContext("sign_up");
  const signIn = createAuthContext("sign_in");

  return { user, error, success, setUser, createUser, signIn };
}

export default useUser;
