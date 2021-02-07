function SearchBar({ handleSubmit, handleChange, searchData }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="searchBar"
        name="searchBar"
        value={searchData}
        onChange={handleChange}
        placeholder="Search by name..."
      ></input>
      <button id="submit" type="submit" value="Submit">
        Submit
      </button>
    </form>
  );
}

export default SearchBar;
