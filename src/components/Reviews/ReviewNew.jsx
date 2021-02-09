import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import createReview from "../../hooks/useReviews";
import { StyledForm, Field, Input, Label } from "../../styles/tileStyles";

function NewReview() {
  let history = useHistory();
  const { id } = useParams();
  const [reviewInfo, setReviewInfo] = useState({
    body: "",
    rating: "",
    location_id: id,
    file: "",
  });

  const handleFormChange = (e) => {
    setReviewInfo({
      ...reviewInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setReviewInfo({
      ...reviewInfo,
      [e.target.name]: e.target.files[0],
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    createReview(reviewInfo);
    history.push("/");
    alert("Thanks for your review!");
  }

  return (
    <StyledForm encType="multipart/form-data" onSubmit={handleSubmit}>
      <Field>
        <Input
          type="text"
          name="body"
          value={reviewInfo.body}
          id={reviewInfo.body}
          onChange={handleFormChange}
          style={{ height: "4rem" }}
        />
      </Field>
      <Field>
        <Label htmlFor={reviewInfo.rating}>Rating (between 1 and 5):</Label>
        <Input
          type="number"
          min="1"
          max="5"
          name="rating"
          value={reviewInfo.rating}
          onChange={handleFormChange}
          id={reviewInfo.rating}
        />
      </Field>
      <Field>
        <Label htmlFor="file">Add an image to your review:</Label>
        <Input type="file" name="file" id="file" onChange={handleImageChange} />
      </Field>
      <button id="submit" type="submit" value="Submit">
        Submit!
      </button>
    </StyledForm>
  );
}

export default NewReview;
