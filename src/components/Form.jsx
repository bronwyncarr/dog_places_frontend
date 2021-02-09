// This form is used to create a new and edit an existing location information.
// A user must be signed in to create a new location, A user must be admin to edit a location
import {
  Wrapper,
  StyledForm,
  Field,
  Input,
  Label,
  Heading,
  Select,
  Checkboxes,
  Submit,
} from "../styles/tileStyles";
import useLocation from "../hooks/useLocation";
import { useParams } from "react-router-dom";
import capitaliseName from "../utils/capitaliseName";
import PropTypes from "prop-types";
import { useGlobalState } from "../utils/context";

// Props for the form are passed in from the NewLcoation or Edit Location
function GeneratedForm({
  formType,
  locationTypes,
  facilityTypes,
  history,
  heading,
}) {
  const fields = ["name", "address", "description"];
  const { id } = useParams();
  const { location, setLocation, updateLocation, createLocation } = useLocation(
    id
  );
  const { store } = useGlobalState();
  const { loggedInAdmin } = store;

  const handleFormChange = (e) => {
    setLocation({
      ...location,
      [e.target.name]: e.target.value,
    });
  };

  // Form change for checkboxes
  const handleCheckChange = (e) => {
    const checkboxes = [...location.location_facilities_attributes];
    const checkedItem = e.target.value;

    const s = new Set(checkboxes);

    s.has(checkedItem) ? s.delete(checkedItem) : s.add(checkedItem);

    setLocation({
      ...location,
      location_facilities_attributes: [...s],
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    switch (formType) {
      case "update":
        await updateLocation();
        if (!loggedInAdmin) {
          alert(
            "Your request has been sent to our admin team for edit approval"
          );
        }
        break;

      case "create":
        await createLocation();
        break;

      default:
        throw Error("Incorrect formType provided");
    }
    history.push("/");
  }

  return (
    <Wrapper>
      <Heading>{heading}</Heading>
      <StyledForm onSubmit={handleSubmit}>
        {/* Name, description and address fields */}
        {fields.map((item, index) => {
          return (
            <Field key={index}>
              <Label htmlFor={item}>{capitaliseName(item)}:</Label>
              <Input
                type="text"
                name={item}
                id={item}
                value={location[item]}
                onChange={handleFormChange}
              />
            </Field>
          );
        })}
        {/* Select option for category. Location types are retrived from static assets  */}
        <Field>
          <Label htmlFor="category">Category:</Label>
          <Select
            name="location_type_name"
            id="location_type_name"
            value={location.location_type_name}
            onChange={handleFormChange}
          >
            <option value selected>
              -- Please select --
            </option>
            {locationTypes &&
              locationTypes.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
          </Select>
        </Field>
        {/* Checkboxes for facilities. Facility types are retrived from static assets */}
        <Label>Facilities:</Label>
        <Checkboxes>
          {facilityTypes &&
            facilityTypes.map((item, index) => {
              return (
                <div key={index}>
                  <input
                    type="checkbox"
                    checked={location.location_facilities_attributes.includes(
                      item
                    )}
                    id={item}
                    name={item}
                    value={item}
                    onChange={handleCheckChange}
                  />
                  <label htmlFor={item}> {capitaliseName(item)}</label>
                </div>
              );
            })}
        </Checkboxes>
        <Submit id="submit" type="submit" value="Submit">
          Submit!
        </Submit>
      </StyledForm>
    </Wrapper>
  );
}

GeneratedForm.propTypes = {
  formType: PropTypes.oneOf(["update", "create"]),
};

export default GeneratedForm;
