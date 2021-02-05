import GeneratedForm from "../Form";
import useLocation from "../../hooks/useLocation";
import useStaticAssets from "../../hooks/useStaticAssets";

function NewLocation({ history }) {
  // Inbound info from static assets

  // Initiates state as empty object (with keys so inputs are always controlled)
  const { location, setLocation, createLocation } = useLocation();
  const staticAssets = useStaticAssets();
  const {
    location_types: locationTypes,
    location_facilities: facilityTypes,
  } = staticAssets;

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

  const handleImageChange = (e) => {
    setLocation({
      ...location,
      [e.target.name]: e.target.files[0],
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
        handleImageChange={handleImageChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default NewLocation;
