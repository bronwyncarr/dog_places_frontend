import { useState, useEffect } from "react";
import GeneratedForm from "./Form";
import { getStaticAssets } from "../services/locationServices";
import { useGlobalState } from "../utils/context";

function NewLocation({ history }) {
  // Inbound info from static assets
  const { store, dispatch } = useGlobalState();
  const { staticAssets } = store;
  const {
    location_types: locationTypes,
    location_facilities: facilityTypes,
  } = staticAssets;

  // Initiates state as empty object (with keys so inputs are always controlled)
  const [details, setDetails] = useState({
    name: "",
    location_type_name: "",
    description: "",
    address: "",
    location_facilities_attributes: [],
  });

  // If statis assets don't exist, fetch call to get them and saves in global state.
  // Assets to display types and facilities.
  useEffect(() => {
    !staticAssets.location_types &&
      getStaticAssets()
        .then((assets) => {
          dispatch({ type: "setStaticAssets", data: assets });
        })
        .catch((error) => console.log(error));
  }, [dispatch]);

  // On submit create body, and send post request. Then redirect to locations.
  async function handleSubmit(e) {
    e.preventDefault();
    const body = JSON.stringify({
      // Can this be refactored?????????????????????
      name: details.name,
      location_type_name: details.location_type_name,
      description: details.description,
      address: details.address,
      location_facilities_attributes: details.location_facilities_attributes,
    });
    try {
      // To be refatored into auth services
      // POST request on submit, then redirect to locations pg.
      await fetch(`${process.env.REACT_APP_BACKEND_URL}/locations`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: body,
      });
      history.goBack();
    } catch (err) {
      console.log(err.message);
    }
  }

  // Form change of details
  const handleFormChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };

  // Form change for checkboxes
  const handleCheckChange = (e) => {
    setDetails({
      ...details,
      location_facilities_attributes: [
        ...details.location_facilities_attributes,
        e.target.value,
      ],
    });
  };

  return (
    <>
      <h1>New Location</h1>
      <GeneratedForm
        details={details}
        locationTypes={locationTypes}
        facilityTypes={facilityTypes}
        handleCheckChange={handleCheckChange}
        handleFormChange={handleFormChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default NewLocation;
