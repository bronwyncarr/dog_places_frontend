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
  background-color: #82d190;
  flex: 1 1 auto;
  height: 100%;
`;

export const Title = styled.h1`
  text-align: center;
  vertical-align: center;
  font-size: 3.5rem;
  padding-bottom: 1rem;
`;

export const Button = styled.button`
  margin: 0 auto;
  padding: 0.2rem 2rem;
  font-size: 1rem;
  border: 1px solid #00717a;
  border-radius: 10px;
  background-color: #daf5ea;
`;

export const ButtonLink = styled(Link)`
  margin: 0 auto;
  padding: 0.2rem 2rem;
  font-size: 1rem;
  border: 1px solid #00717a;
  border-radius: 10px;
  background-color: #daf5ea;
  text-decoration: none;
`;
