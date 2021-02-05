// Form is used for new and edit location
// Needs styling

import { Form, Checkboxes } from "../styles/NewLocation";
function GeneratedForm({
  details,
  locationTypes,
  facilityTypes,
  handleFormChange,
  handleCheckChange,
  handleImageChange,
  handleSubmit,
}) {
  const fields = ["name", "address", "description"];

  function capitaliseName(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <Form encType="multipart/form-data" onSubmit={handleSubmit}>
      {fields.map((item, index) => {
        return (
          <div key={index}>
            <label htmlFor={item}>{capitaliseName(item)}</label>
            <input
              type="text"
              name={item}
              id={item}
              value={details[item]}
              onChange={handleFormChange}
            />
          </div>
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
          locationTypes.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
      </select>

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

      <label htmlFor="file">Share an image of this location:</label>
      <input type="file" name="file" id="file" onChange={handleImageChange} />

      <button id="submit" type="submit" value="Submit">
        Submit!
      </button>
    </Form>
  );
}

export default GeneratedForm;
