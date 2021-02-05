import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";

function NewUser({ history }) {
  // single state object that contains user info
  const { user, error, setUser, createUser } = useUser();

  async function onFormSubmit(e) {
    e.preventDefault();
    await createUser();
    // Could this be refactored????????????
  }

  // Updates state object as info is typed into the form
  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  return (
    <>
      <h1>Sign Up!</h1>
      {error && <span>{error}</span>}
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
