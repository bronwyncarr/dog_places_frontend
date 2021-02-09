import styled from "styled-components/macro";

export const Wrapper = styled.div`
  width: 80%;
  margin: 1rem auto;
  padding: 0.5rem 2rem;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 2px 2px 5px 2px rgba(100 100 100);
  line-height: 1.4rem;
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

export const Select = styled.select`
  flex: 1 1 auto;
`;

export const Checkboxes = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  padding-right: 0.5rem;
`;
export const Submit = styled.button`
  margin: 0 auto;
  padding: 0.5rem 2rem;
  font-size: 1rem;
  border-radius: 10px;
  background-color: #daf5ea;
`;

export const Heading = styled.h1`
  text-align: center;
  /* margin: 0.5rem 0; */
  padding: 0.5rem 0;
`;

// #daf5ea -light blue
//#00717a - dark blue
// #ffadad - coral
//#f7c200 - gold
// #009475 -tree green
// whitesmoke - fence post/whitesmoke alt
