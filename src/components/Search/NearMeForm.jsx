import { Field, Label, Select, StyledForm } from "../../styles/tileStyles";

// Near me form allows users to select 5, 10, 20 or 50kms
function NearMe({ handleNearMeSubmit, handleNearMeChange, distance }) {
  return (
    <StyledForm onSubmit={handleNearMeSubmit}>
      <Field>
        <Label htmlFor="distance">Within:</Label>
        <Select
          name="distance"
          id="distance"
          value={distance}
          onChange={handleNearMeChange}
        >
          <option value="5">5km</option>
          <option value="10">10km</option>
          <option value="20">20km</option>
          <option value="50">50km</option>
        </Select>
        <button id="submit" type="submit" value="Submit">
          Find near me!
        </button>
      </Field>
    </StyledForm>
  );
}

export default NearMe;
