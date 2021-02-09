import styled from "styled-components/macro";

export const FormWrapper = styled.div`
  padding: 0.5rem 2rem;
  min-width: 30%;
  max-width: 50%;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 2px 2px 5px 2px rgba(100 100 100);
  @media (max-width: 1400px) {
    width: 80%;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Field = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0.4rem 0;
`;

export const Input = styled.input`
  flex: 1 1 auto;
`;

export const Label = styled.label`
  padding-right: 0.5rem;
`;

export const Heading = styled.h1`
  text-align: center;
  /* margin: 0.5rem 0; */
  padding: 0.5rem 0;
`;
