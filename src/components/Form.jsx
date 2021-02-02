// Form is used for new and edit location
// Needs styling

// Object to go back looks like:
// name: "",
// location_type_name: "",
// description: "",
// address: "",
// location_facilities_attributes: [],

import { Form, Checkboxes } from "../styles/NewLocation";

function GeneratedForm({
  details,
  locationTypes,
  facilityTypes,
  handleFormChange,
  handleCheckChange,
  handleSubmit,
}) {
  const fields = ["name", "address", "description"];

  function capitaliseName(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <Form onSubmit={handleSubmit}>
      {fields.map((item) => {
        return (
          <>
            <label htmlFor={item}>{capitaliseName(item)}</label>
            <input
              type="text"
              name={item}
              id={item}
              value={details[item]}
              onChange={handleFormChange}
            />
          </>
        );
      })}
      <label htmlFor="category">Category:</label>
      <select
        name="location_type_name"
        id="location_type_name"
        value={details.location_type_name}
        onChange={handleFormChange}
      >
        {/* Need to sort out default option */}
        <option value selected>
          -- Please select --
        </option>

        {locationTypes &&
          locationTypes.map((item) => <option value={item}>{item}</option>)}
      </select>

      <Checkboxes>
        {facilityTypes.map((item) => {
          return (
            <div>
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
      <button id="submit" type="submit" value="Submit">
        Submit!
      </button>
    </Form>
  );
}

export default GeneratedForm;
