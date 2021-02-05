import useUser from "../../hooks/useUser";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function NewSession({ history }) {
  const { user, setUser, signIn, error, success } = useUser();

  async function onFormSubmit(event) {
    event.preventDefault();
    await signIn();
  }

  useEffect(() => {
    if (success) {
      history.push("/");
    }
  }, [success, history]);

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  return (
    <>
      <h1>Sign In!</h1>
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
