import { Form, Label, Input, Checkboxes } from "../styles/NewLocation";

function GeneratedForm({ details, handleFormChange, handleSubmit }) {
  const fields = ["name", "address", "description"];
  const checkboxData = ["water", "food", "toilets", "offlead", "parking"];

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
        <option value="park">Park</option>
        <option value="food">Food</option>
        <option value="accomodation">Accomodation</option>
        <option value="beach">Beach</option>
      </select>

      <Checkboxes>
        {checkboxData.map((item) => {
          return (
            <div>
              <input
                type="checkbox"
                id={item}
                name={item}
                value={details.item}
                onChange={handleFormChange}
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
