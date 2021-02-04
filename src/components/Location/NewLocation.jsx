import { useEffect } from "react";
import GeneratedForm from "../Form";
import { getStaticAssets } from "../../services/locationServices";
import { useGlobalState } from "../../utils/context";
import useLocation from "../../hooks/useLocation";

function NewLocation({ history }) {
  // Inbound info from static assets
  const { store, dispatch } = useGlobalState();
  const { staticAssets } = store;
  const {
    location_types: locationTypes,
    location_facilities: facilityTypes,
  } = staticAssets;

  // Initiates state as empty object (with keys so inputs are always controlled)
  const { location, setLocation, createLocation } = useLocation();

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

  // On submit create body, and send post request. Then redirect to locations.
  async function handleSubmit(e) {
    e.preventDefault();
    await createLocation();
    history.goBack();
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
      <h1>New Location</h1>
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

export default NewLocation;
