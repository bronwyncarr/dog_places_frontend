import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Location(props) {
  const [location, setLocation] = useState([]);
  const id = props.match.params.id;
  useEffect(() => {
    fetch(`http://localhost:3000/api/locations/${id}`)
      .then((res) => res.json())
      .then((data) => setLocation(data));
  }, [id]);

  return (
    <>
      <h1>{location.name}</h1>
      <Link
        to="/"
        onclick={(e) => {
          props.history.goBack();
        }}
      >
        {" "}
        Back
      </Link>
    </>
  );
}

export default Location;
