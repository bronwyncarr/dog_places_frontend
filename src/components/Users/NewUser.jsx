import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";
import { useEffect, useState } from "react";

function NewUser({ history }) {
  // From useUser Hook, we get:
  // -  a copy of the user state
  // - boolean for successful/unsuccessful
  // - error if occured || null
  // createUser and setUser function
  const { user, success, error, setUser, createUser } = useUser();
  const [passwordError, setPasswordError] = useState("");

  // When the form is submitted, the createUser function in the hook runs.
  async function onFormSubmit(e) {
    e.preventDefault();
    if (user.confirmPassword === user.password) {
      setPasswordError(""); // Clean up if previously incorrect.
      await createUser();
    } else {
      setPasswordError("Passwords did not match. Please try again!");
    }
  }

  // Anytime the success boolean or hist changes (ie user signed up), we're redirected to the home pg.
  useEffect(() => {
    success && history.push("/");
  }, [success, history]);

  // Updates state as info is typed into the form.
  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  return (
    <>
      <h1>Sign Up!</h1>
      {/* If an error is recieved it will be displayed to the user */}
      {passwordError && <span>{passwordError}</span>}
      {error && <span>{error}</span>}
      <form onSubmit={onFormSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={user.email}
          onChange={handleChange}
        />
        <label htmlFor="username">userName</label>
        <input
          type="text"
          name="username"
          id="username"
          value={user.username}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={user.password}
          onChange={handleChange}
        />
        <label htmlFor="password">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={user.confirmPassword}
          onChange={handleChange}
        />
        <input id="submit" type="submit" value="Submit" />
      </form>
      <p>
        Already a member?<Link to={`/sign_in`}>Sign in here</Link>
      </p>
    </>
  );
}
export default NewUser;
