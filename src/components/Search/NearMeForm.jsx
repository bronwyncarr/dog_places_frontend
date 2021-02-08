function NearMe({ handleNearMeSubmit, handleNearMeChange, distance }) {
  return (
    <form onSubmit={handleNearMeSubmit}>
      <label htmlFor="distance">Select a distance:</label>
      <select
        name="distance"
        id="distance"
        value={distance}
        onChange={handleNearMeChange}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </select>
      <button id="submit" type="submit" value="Submit">
        Find near me!
      </button>
    </form>
  );
}

export default NearMe;
