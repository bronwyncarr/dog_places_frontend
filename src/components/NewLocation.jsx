import { useState, useEffect } from "react";
import GeneratedForm from "./Form";
import { getStaticAssets } from "../services/locationServices";
import { Redirect } from "react-router-dom";

function NewLocation() {
  // Initiates state as empty object (with keys so inputs are always controlled)
  const [details, setDetails] = useState({
    name: "",
    location_type_name: "",
    description: "",
    address: "",
    location_facilities_attributes: [],
  });

  // Inbound info from static assets
  const [locationTypes, setLocationTypes] = useState([]);
  const [facilityTypes, setFacilityTypes] = useState([]);

  // On l;oad get static assets to display types and facilities.
  useEffect(() => {
    getStaticAssets()
      .then((staticAssets) => {
        const { location_facilities, location_types } = staticAssets;
        setLocationTypes(location_types);
        setFacilityTypes(location_facilities);
      })
      .catch((error) => console.log(error));
  }, []);

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
      <Redirect to="/locations" />;
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
