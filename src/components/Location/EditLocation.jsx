import { useEffect } from "react";
import { useParams } from "react-router-dom";
import GeneratedForm from "../Form";
import { useGlobalState } from "../../utils/context";
import { getStaticAssets } from "../../services/locationServices";
import useLocation from "../../hooks/useLocation";

function EditLocation({ history }) {
  // Inbound info from static assets
  const { store, dispatch } = useGlobalState();
  const { staticAssets } = store;
  const {
    location_types: locationTypes,
    location_facilities: facilityTypes,
  } = staticAssets;

  const { id } = useParams();
  const { loggedInAdmin } = store;

  const { location, setLocation, updateLocation } = useLocation(id);

  // If statis assets don't exist, fetch call to get them and saves in global state.
  // Assets to display types and facilities.
  useEffect(() => {
    !staticAssets.location_types &&
      getStaticAssets()
        .then((assets) => {
          dispatch({ type: "setStaticAssets", data: assets });
        })
        .catch((error) => console.log(error));
  }, [dispatch, staticAssets.location_types]);

  async function handleSubmit(e) {
    // POST request on submit, then redirect to locations pg.
    e.preventDefault();
    await updateLocation();
    history.push("/");
    // If not admin will get a prompt that mailer sent to admin
    !loggedInAdmin &&
      alert("Your request has been sent to our admin team for edit approval");
  }

  // Form change of details
  const handleFormChange = (e) => {
    setLocation({
      ...location,
      [e.target.name]: e.target.value,
    });
  };

  // Form change for checkboxes
  const handleCheckChange = (e) => {
    setLocation({
      ...location,
      location_facilities_attributes: [
        ...location.location_facilities_attributes,
        e.target.value,
      ],
    });
  };

  return (
    <>
      <h1>Edit Location</h1>
      <GeneratedForm
        details={location}
        locationTypes={locationTypes}
        facilityTypes={facilityTypes}
        handleCheckChange={handleCheckChange}
        handleFormChange={handleFormChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default EditLocation;
