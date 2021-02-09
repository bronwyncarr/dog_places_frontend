import GeneratedForm from "../Form";
import useStaticAssets from "../../hooks/useStaticAssets";

function EditLocation({ history }) {
  const staticAssets = useStaticAssets();
  const {
    location_types: locationTypes,
    location_facilities: facilityTypes,
  } = staticAssets;

  return (
    <>
      <h1>Edit Location</h1>
      <GeneratedForm
        heading="Update Location"
        formType="update"
        locationTypes={locationTypes}
        facilityTypes={facilityTypes}
        history={history}
      />
    </>
  );
}

export default EditLocation;
