// Form is used for new and edit location
// Needs styling

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
        name="category"
        id="category"
        value={details.category}
        onChange={handleFormChange}
      >
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
