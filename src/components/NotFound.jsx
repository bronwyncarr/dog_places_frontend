import { Link } from "react-router-dom";
import { Notification } from "../styles/Layout";

function NotFound() {
  return (
    <Notification>
      <h3>
        Oops! Something went wrong. Looks like that resource can't be found
        right now.
      </h3>
      <h3>Would you like to go back to the </h3>
      <Link to={`/locations/`}>Home page?</Link>
    </Notification>
  );
}

export default NotFound;
