function average(reviews) {
  const ratings = reviews.map((location) => location.rating);
  const filteredRatings = ratings.filter(
    (rating) => typeof rating === "number"
  );
  return filteredRatings.length >= 1
    ? `Stars: ${
        filteredRatings.reduce((a, b) => a + b) / filteredRatings.length
      }`
    : "No rating yet to display";
}

export default average;
