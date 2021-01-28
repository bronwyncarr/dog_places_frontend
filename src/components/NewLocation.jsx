import { useState } from "react";
import { Form, Label, Input, Checkboxes } from "../styles/NewLocation";

function NewLocation({ history }) {
  const [details, setDetails] = useState({
    name: "",
    category: "",
    description: "",
    address: "",
    water: "",
    food: "",
    toilets: "",
    parking: "",
    offLead: "",
  });

  const handleFormChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      await fetch(`${process.env.REACT_APP_BACKEND_URL}/locations`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          location: {
            user_id: 1,
            location_type_id: 1,
            name: details.name,
            description: details.description,
            address: details.address,
          },
        }),
      });
      history.push("/locations");
    } catch (err) {
      console.log(err.message);
    }
  }

  const fields = ["name", "address", "description"];
  const checkboxData = ["water", "food", "toilets", "offlead", "parking"];

  function capitaliseName(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h1>NewLocation</h1>
      {fields.map((item) => {
        return (
          <>
            <label htmlFor={item}>{capitaliseName(item)}</label>
            <input
              type="text"
              name={item}
              id={item}
              value={details.name}
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

export default NewLocation;
