import { useState, useEffect } from "react";
import { Form, Label, Input, Checkboxes } from "../styles/NewLocation";
import { useParams } from "react-router-dom";

function NewLocation({ history }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [water, setWater] = useState(false);
  const [food, setFood] = useState(false);
  const [toilets, setToilets] = useState(false);
  const [parking, setParking] = useState(false);
  const [offLead, setOffLead] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/api/locations/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((location) => {
        setName(location.name);
        setCategory(location.category);
        setDescription(location.description);
        setAddress(location.address);
      });
  }, [id]);

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      await fetch(`http://localhost:3000/api/locations/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          location: {
            user_id: 1,
            location_type_id: 1,
            name,
            description,
            address,
          },
        }),
      });
      // redirect_to
      history.push("/locations");
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Edit Location</h1>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="address">Address:</label>
      <input
        type="text"
        name="address"
        id="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <label htmlFor="category">Category:</label>
      <select
        name="category"
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="park">Park</option>
        <option value="food">Food</option>
        <option value="accomodation">Accomodation</option>
        <option value="beach">Beach</option>
      </select>
      <label htmlFor="description">Description:</label>
      <input
        type="text"
        name="description"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Checkboxes>
        <input
          type="checkbox"
          id="toilets"
          name="toilets"
          value={toilets}
          onChange={(e) => {
            setToilets(!toilets);
          }}
        />
        <label htmlFor="toilets"> Toilets</label>
        <br />
        <input
          type="checkbox"
          id="food"
          name="food"
          value={food}
          onChange={(e) => setFood(!food)}
        />
        <label htmlFor="food"> Food</label>
        <br />
        <input
          type="checkbox"
          id="parking"
          name="parking"
          value={parking}
          onChange={(e) => setParking(!parking)}
        />
        <label htmlFor="parking">Parking</label>
        <br />
        <input
          type="checkbox"
          id="water"
          name="water"
          value={water}
          onChange={(e) => setWater(!water)}
        />
        <label htmlFor="water">Water</label>
        <br />
        <input
          type="checkbox"
          id="offLead"
          name="offLead"
          value={offLead}
          onChange={(e) => setOffLead(!offLead)}
        />
        <label htmlFor="offLead">Off-Lead</label>
        <br />
      </Checkboxes>
      <button id="submit" type="submit" value="Submit">
        Submit!
      </button>
    </Form>
  );
}

export default NewLocation;
