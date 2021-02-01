import React, { useState } from "react";
import { useGlobalState } from "../utils/context";

function NewSession({ history }) {
  // single state object that contains user info
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [errMessage, setErrMessage] = useState("");
  const { dispatch } = useGlobalState();

  async function onFormSubmit(event) {
    event.preventDefault();
    const body = {
      user: {
        username: user.username,
        password: user.password,
      },
    };
    try {
      // Some of this should be refactored into authServices
      const response = await fetch(`http://localhost:3000/api/auth/sign_in`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (response.status >= 404) {
        throw new Error(
          "Incorrect credential. Please check your username, password and try again."
        );
      } else if (response.status >= 422) {
        throw new Error(
          "That username or password already exists in our system. Please choose another"
        );
      } else {
        const { jwt } = await response.json();
        localStorage.setItem("token", jwt);
        dispatch({ type: "setLoggedInUser", data: user.username });
        history.push("/");
      }
    } catch (err) {
      setErrMessage(err.message);
    }
  }

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  return (
    <>
      <h1>Sign In!</h1>
      {errMessage && <span>{errMessage}</span>}
      <form onSubmit={onFormSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="test"
            name="username"
            id="username"
            value={user.username}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <input id="submit" type="submit" value="Submit" />
      </form>
    </>
  );
}
export default NewSession;
