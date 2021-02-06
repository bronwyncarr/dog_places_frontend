function average(reviews) {
  const ratings = reviews.map((location) => location.rating);
  const filteredRatings = ratings.filter(
    (rating) => typeof rating === "number"
  );

  let roundedRating = "No reviews to display";
  if (filteredRatings.length >= 1) {
    const rating =
      filteredRatings.reduce((a, b) => a + b) / filteredRatings.length;
    roundedRating = Math.round(rating * 10) / 10;
  }

  return roundedRating;
}

export default average;

// let stars = [];

// while (roundedRating > 0) {
//   stars.push(`<i class="fas fa-star-half-alt"></i>`);
//   roundedRating--;
// }
