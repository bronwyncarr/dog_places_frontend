function average(reviews) {
  const ratings = reviews.map((location) => location.rating);
  const filteredRatings = ratings.filter(
    (rating) => typeof rating === "number"
  );
  return filteredRatings.reduce((a, b) => a + b) / filteredRatings.length;
}

export default average;
