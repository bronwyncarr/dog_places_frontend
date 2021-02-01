import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AuthFetch } from "../services/authServices";
import GeneratedForm from "./Form";
import { createLocation } from "../services/locationServices";
import { Redirect } from "react-router-dom";
import { getLocation } from "../services/locationServices";

function EditLocation({ history }) {
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
    getLocation(id)
      .then((details) => setDetails(details))
      .catch((error) => console.log(error));
  }, [id]);

  async function handleSubmit(e) {
    // POST request on submit, then redirect to locations pg.
    e.preventDefault();
    const body = JSON.stringify({
      location_type_id: 1,
      name: details.name,
      description: details.description,
      address: details.address,
    });
    try {
      await fetch(`${process.env.REACT_APP_BACKEND_URL}/locations/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: body,
      });
      <Redirect to="/locations" />;
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

export default EditLocation;
