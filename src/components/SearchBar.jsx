import { useState } from "react";

function SearchBar() {
  const [searchData, setSearchData] = useState("");
  function handleChange(e) {
    setSearchData(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="searchBar"
        name="searchBar"
        value={searchData}
        onChange={handleChange}
      ></input>
      <button id="submit" type="submit" value="Submit">
        Submit
      </button>
    </form>
  );
}

export default SearchBar;
