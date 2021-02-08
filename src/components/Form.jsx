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
// Props for the form are passed in from the NewLcoation or Edit Location
function GeneratedForm({
  details,
  locationTypes,
  facilityTypes,
  handleFormChange,
  handleCheckChange,
  handleSubmit,
}) {
  const fields = ["name", "address", "description"];

  // Captialise Name for consistency
  function capitaliseName(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <Wrapper>
      <Heading>New Location</Heading>
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
                value={details[item]}
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
            value={details.location_type_name}
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

export default GeneratedForm;
