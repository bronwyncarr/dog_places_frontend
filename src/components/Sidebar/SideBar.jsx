import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import dog from "./dog.svg";

const SideBarWrapper = styled.div`
  height: 100%;
  background-color: whitesmoke;
  flex: 0 1 auto;
`;

const SideBarImage = styled.img`
  margin: 0 auto;
  padding: 2rem 2.5rem 1rem 2.5rem;
  max-width: calc(100% - 5rem);
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
      <SideBarImage src={dog} alt="dog"></SideBarImage>
      <SideBarHeading>OFF THE LEASH</SideBarHeading>
      <SideBarList>{children}</SideBarList>
    </SideBarWrapper>
  );
}

export default SideBar;

export { SideBarLink };
