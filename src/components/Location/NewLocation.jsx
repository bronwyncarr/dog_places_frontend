import GeneratedForm from "../Form";
import useStaticAssets from "../../hooks/useStaticAssets";

function NewLocation({ history }) {
  // Inbound info from static assets
  const staticAssets = useStaticAssets();
  const {
    location_types: locationTypes,
    location_facilities: facilityTypes,
  } = staticAssets;

  // Props passed in to form for new form.
  return (
    <>
      <GeneratedForm
        heading="New Location"
        formType="create"
        locationTypes={locationTypes}
        facilityTypes={facilityTypes}
        history={history}
      />
    </>
  );
}

export default NewLocation;
