import axios from "axios";

async function createReview(review) {
  const formData = new FormData();
  for (const key in review) {
    formData.append(`${key}`, review[key]);
  }
  try {
    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/reviews`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  } catch (error) {
    console.error("Create Error");
  }
}

export default createReview;
