import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GeneratedForm from "./Form";

function NewLocation({ history }) {
  const [details, setDetails] = useState({
    name: "",
    category: "",
    description: "",
    address: "",
    water: "",
    food: "",
    toilets: "",
    parking: "",
    offLead: "",
  });
  const { id } = useParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/locations/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((location) => {
        console.log(location);
        setDetails({
          ...location,
        });
      });
  }, []);

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      await fetch(`${process.env.REACT_APP_BACKEND_URL}/locations/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          location: {
            user_id: 1,
            location_type_id: 1,
            name: details.name,
            description: details.description,
            address: details.address,
          },
        }),
      });
      history.push("/locations");
    } catch (err) {
      console.log(err.message);
    }
  }

  const handleFormChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h1>Edit Location</h1>
      <GeneratedForm
        details={details}
        handleFormChange={handleFormChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default NewLocation;
