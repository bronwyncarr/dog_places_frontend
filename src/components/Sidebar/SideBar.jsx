import styled from "styled-components/macro";
import { Link } from "react-router-dom";

const SideBarWrapper = styled.div`
  height: 100%;
  background-color: whitesmoke;
  flex: 0 1 auto;
`;

const SideBarList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  list-style-type: none;
`;

const SideBarLink = styled(Link)`
  color: black;
  padding: 0.4rem 1rem;
  font-size: 2rem;
  text-decoration: none;

  &:visited {
    color: inherit;
  }

  &:hover {
    background-color: slategray;
    color: whitesmoke;
  }
`;

const SideBarHeading = styled.h1`
  margin: 0;
  padding: 2rem;
  text-align: center;
  font-size: 2rem;
`;

function SideBar({ children }) {
  return (
    <SideBarWrapper>
      <SideBarHeading>
        <i className="fas fa-paw"></i> OFF THE LEASH
      </SideBarHeading>
      <SideBarList>{children}</SideBarList>
    </SideBarWrapper>
  );
}

export default SideBar;

export { SideBarLink };
