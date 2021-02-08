import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const AppContainer = styled.div`
  height: 100%;
  overflow: hidden;
`;

export const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  background-color: DarkSeaGreen;
  flex: 1 1 auto;
  overflow-y: scroll;
  height: 100%;
`;
