import styled from "styled-components";
import { Link } from "react-router-dom";

export const Layout = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
`;

export const SideBarWrapper = styled.div`
  width: 15%;
`;

export const SideBarList = styled.ul`
  list-style-type: none;
  position: relative;
  top: 20%;
`;

export const SideBarLink = styled(Link)`
  background-color: AliceBlue;
  font-size: 2rem;
  text-decoration: none;
`;

export const Content = styled.div`
  background-color: DarkSeaGreen;
  width: 85%;
`;
