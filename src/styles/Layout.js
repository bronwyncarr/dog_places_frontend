import styled from "styled-components";
import { Link } from "react-router-dom";

export const Layout = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
`;

export const SideBarWrapper = styled.div`
  width: 20%;
`;

export const SideBarList = styled.ul`
  list-style-type: none;
  position: relative;
  top: 15%;
`;

export const SideBarLink = styled(Link)`
  font-size: 2rem;
  text-decoration: none;
`;

export const SideBarHeading = styled.h1`
  margin-top: 1rem;
  text-align: center;
  font-size: 2rem;
`;

export const Content = styled.div`
  background-color: DarkSeaGreen;
  width: 80%;
`;
