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
  const { dispatch } = useGlobalState();

  async function createUser() {
    try {
      // Some of this should be refactored into authServices
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/auth/sign_up`,
        {
          config,
          user,
        }
      );
      const { jwt } = response.data;
      localStorage.setItem("token", jwt);
      dispatch({ type: "setLoggedInUser", data: user.username });
    } catch (error) {
      if (error.response) {
        switch (error.response.status) {
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
      console.log(error.config);
    }
  }

  return { user, error, setUser, createUser };
}

export default useUser;
