import { SubTitle } from "../../styles/Layout";
import ReviewNew from "./ReviewNew";
import styled from "styled-components/macro";

const ReviewOuterContainer = styled.div`
  padding-top: 2rem;
`;

function Reviews({ children }) {
  return (
    <ReviewOuterContainer>
      <SubTitle>Reviews</SubTitle>
      <h3>Tell us what you think....</h3>
      <ReviewNew />
      <div>{children}</div>
    </ReviewOuterContainer>
  );
}

export default Reviews;
