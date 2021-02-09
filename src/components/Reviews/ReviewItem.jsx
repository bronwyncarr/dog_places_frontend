import makeStars from "../../utils/makeStars";
import styled from "styled-components/macro";
import defaultImg from "../../dog.png";
import capitaliseName from "../../utils/capitaliseName";

const ReviewContainer = styled.div`
  display: flex;
  margin: 1rem 0;
`;
const ReviewImage = styled.div`
  width: 30%;
`;

const ReviewText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
  font-size: 1.2rem;
  padding: 0.7rem;
`;

const ReviewRating = styled.div`
  display: flex;
  justify-content: space-between;
`;

function ReviewItem({ body, rating, image_url, user }) {
  return (
    <ReviewContainer>
      <ReviewImage>
        <img
          src={image_url ? image_url : defaultImg}
          alt="Review of location"
          style={{ width: "100%", maxHeight: "200px" }}
        ></img>
      </ReviewImage>
      <ReviewText>
        <p>{body}</p>
        <ReviewRating>
          <p>
            {makeStars(rating)} - {rating}/5
          </p>
          <p>Created by: {capitaliseName(user)}</p>
        </ReviewRating>
      </ReviewText>
    </ReviewContainer>
  );
}

export default ReviewItem;
