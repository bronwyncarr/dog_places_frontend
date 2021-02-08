function SearchBar({ handleSearchSubmit, handleSearchChange, searchData }) {
  return (
    <form onSubmit={handleSearchSubmit}>
      <input
        type="text"
        id="searchBar"
        name="searchBar"
        value={searchData}
        onChange={handleSearchChange}
        placeholder="Search by name..."
      ></input>
      <button id="submit" type="submit" value="Submit">
        Submit
      </button>
    </form>
  );
}

export default SearchBar;
