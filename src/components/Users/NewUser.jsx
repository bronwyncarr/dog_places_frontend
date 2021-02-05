import React, { useState } from "react";
import { useGlobalState } from "../../utils/context";
import { Link } from "react-router-dom";

function NewUser({ history }) {
  // single state object that contains user info
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errMessage, setErrMessage] = useState("");
  const { dispatch } = useGlobalState();

  async function onFormSubmit(e) {
    e.preventDefault();
    // Could this be refactored????????????
    const body = {
      user: {
        email: user.email,
        username: user.username,
        password: user.password,
      },
    };
    try {
      // Some of this should be refactored into authServices
      const response = await fetch(`http://localhost:3000/api/auth/sign_up`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (response.status === 404) {
        throw new Error(
          "Incorrect credential. Please check your username, password and try again."
        );
      } else if (response.status === 422) {
        throw new Error(
          "That username or password already exists in our system. Please choose another."
        );
      } else if (response.status >= 400) {
        throw new Error("Unknown error occured, please try again later.");
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

  // Updates state object as info is typed into the form
  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  return (
    <>
      <h1>Sign Up!</h1>
      {errMessage && <span>{errMessage}</span>}
      <form onSubmit={onFormSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">userName</label>
          <input
            type="text"
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
      <p>
        Already a member?<Link to={`/sign_in`}>Sign in here</Link>
      </p>
    </>
  );
}
export default NewUser;
