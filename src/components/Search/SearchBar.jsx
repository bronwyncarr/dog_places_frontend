import { StyledForm, Field, Input } from "../../styles/formStyles";
import styled from "styled-components/macro";

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function SearchBar({ handleSearchSubmit, handleSearchChange, searchData }) {
  return (
    <SearchWrapper>
      <StyledForm onSubmit={handleSearchSubmit}>
        <Field>
          <Input
            type="text"
            id="searchBar"
            name="searchBar"
            value={searchData}
            onChange={handleSearchChange}
            placeholder="Search by name..."
          />
          <Input id="submit" type="submit" value="Submit" />
        </Field>
      </StyledForm>
    </SearchWrapper>
  );
}

export default SearchBar;
