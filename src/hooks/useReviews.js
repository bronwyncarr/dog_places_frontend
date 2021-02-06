import axios from "axios";

const config = {
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};

async function createReview(review) {
  const formData = new FormData();
  for (const key in review) {
    formData.append(`${key}`, review[key]);
  }
  try {
    await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/locations/review/new`,
      formData,
      config
    );
  } catch (error) {
    // Work out what we need to do later...
    console.error("Create Error");
  }
}

export default createReview;
