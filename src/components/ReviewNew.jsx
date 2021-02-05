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
    const formData = new FormData();
    for (const key in reviewInfo) {
      formData.append(`${key}`, `${reviewInfo[key]}`);
    }
    await createReview(formData);
    // history.push("/");
    alert("Thanks for your review!");
  }

  return (
    <form encType="multipart/form-data" onSubmit={handleSubmit}>
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

      <label htmlFor="file">Add an image to your review:</label>
      <input type="file" name="file" id="file" onChange={handleImageChange} />

      <button id="submit" type="submit" value="Submit">
        Submit!
      </button>
    </form>
  );
}

export default NewReview;
