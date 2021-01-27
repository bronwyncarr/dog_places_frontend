import styled from "styled-components";
import { Link } from "react-router-dom";

export const Layout = styled.div`
  display: flex;
  width: 100vw;
`;

export const SideBarWrapper = styled.div`
  width: 15%;
`;

export const SideBarLink = styled(Link)`
  background-color: AliceBlue;
  font-size: 2rem;
`;
