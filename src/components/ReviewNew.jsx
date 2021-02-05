import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { createReview } from "../services/locationServices";

function NewReview() {
  let history = useHistory();
  const { id } = useParams();
  const [reviewInfo, setReviewInfo] = useState({
    text: "",
    rating: "",
    location_id: id,
  });

  const handleFormChange = (e) => {
    setReviewInfo({
      ...reviewInfo,
      [e.target.name]: e.target.value,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const body = JSON.stringify({
      review: {
        body: reviewInfo.body,
        rating: reviewInfo.rating,
        location_id: id,
      },
    });
    await createReview(body);
    history.push("/");
    alert("Thanks for your review!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="body"
        value={reviewInfo.body}
        id={reviewInfo.body}
        onChange={handleFormChange}
      />
      <label htmlFor={reviewInfo.rating}>Rating (between 1 and 5):</label>
      <input
        type="number"
        min="1"
        max="10"
        name="rating"
        value={reviewInfo.rating}
        onChange={handleFormChange}
        id={reviewInfo.rating}
      />

      {/* <label for="quantity">Rating (between 1 and 10):</label>
  <input type="number" value={reviewInfo.rating} onChange={handleFormChange} id="quantity" name="quantity" min="1" max="5"> */}
      <button id="submit" type="submit" value="Submit">
        Submit!
      </button>
    </form>
  );
}

export default NewReview;
