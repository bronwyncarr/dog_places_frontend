import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fetchData from "../helpers/fetchData";

function Location(props) {
  const [location, setLocation] = useState([]);
  const id = props.match.params.id;

  useEffect(() => {
    (async function () {
      const data = await fetchData(`http://localhost:3000/api/locations/${id}`);
      setLocation(data);
    })();
  }, [id]);

  return (
    <>
      <h1>{location.name}</h1>
      <p>{location.address}</p>
      <Link
        to="/"
        onClick={(e) => {
          props.history.goBack();
        }}
      >
        Back
      </Link>
    </>
  );
}

export default Location;
