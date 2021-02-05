import useUser from "../../hooks/useUser";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function NewSession({ history }) {
  // From useUser Hook, we get:
  // -  a copy of the user state
  // - boolean for successful/unsuccessful
  // - error if occured || null
  // createUser and setUser function
  const { user, setUser, signIn, error, success } = useUser();

  // When the form is submitted, the signIn function in the hook runs.
  async function onFormSubmit(event) {
    event.preventDefault();
    await signIn();
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
      <h1>Sign In!</h1>
      {/* If an error is recieved it will be displayed to the user */}
      {error && <span>{error}</span>}
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
      <p>
        Not yet a member?<Link to={`/sign_up`}>Join today!</Link>
      </p>
    </>
  );
}
export default NewSession;
