import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const AppContainer = styled.div`
  /* height: 100%;
  overflow: hidden;
  @media (max-width: 1400px) {
    overflow: visible;
  } */
`;

export const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  @media (max-width: 1400px) {
    flex-direction: column;
    height: auto;
  }
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

export const SubTitle = styled.h2`
  text-align: center;
  vertical-align: center;
  font-size: 2rem;
  padding-bottom: 1rem;
`;

export const Button = styled.button`
  margin: 0 1rem 1rem;
  padding: 0.2rem 2rem;
  font-size: 1rem;
  border: 1px solid #00717a;
  border-radius: 10px;
  background-color: #daf5ea;
  text-decoration: none;
  font-size: 1.2rem;
`;

export const ButtonLink = styled(Link)`
  margin: 0 1rem 1rem;
  padding: 0.2rem 2rem;
  font-size: 1rem;
  border: 1px solid #00717a;
  border-radius: 10px;
  background-color: #daf5ea;
  text-decoration: none;
  color: black;
  font-size: 1.2rem;
`;

export const Notification = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
