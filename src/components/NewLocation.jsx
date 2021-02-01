import { useState } from "react";
import GeneratedForm from "./Form";
import { useGlobalState } from "../utils/context";
import { createLocation } from "../services/locationServices";
import { Redirect } from "react-router-dom";

function NewLocation() {
  // Initiates state as empty object (with keys so inputs are always controlled)
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

  const { dispatch, store } = useGlobalState();
  const { locations } = store;

  async function handleSubmit(e) {
    e.preventDefault();
    const body = JSON.stringify({
      user_id: 1,
      location_type_id: 1,
      name: details.name,
      description: details.description,
      address: details.address,
    });
    // createLocation(body);
    try {
      // POST request on submit, then redirect to locations pg.
      await fetch(`${process.env.REACT_APP_BACKEND_URL}/locations`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: body,
      });
      console.log(body);
      console.log(localStorage.getItem("token"));
      // redirect when added
      // history.push("/locations");
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
      <h1>New Location</h1>
      <GeneratedForm
        details={details}
        handleFormChange={handleFormChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default NewLocation;
