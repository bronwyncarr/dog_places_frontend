import makeStars from "./makeStars";

function average(reviews) {
  const ratings = reviews.map((location) => location.rating);
  const filteredRatings = ratings.filter(
    (rating) => typeof rating === "number"
  );

  let roundedRating = "No reviews to display";
  let stars = "-";

  if (filteredRatings.length >= 1) {
    const rating =
      filteredRatings.reduce((a, b) => a + b) / filteredRatings.length;
    roundedRating = Math.round(rating * 10) / 10;
    stars = makeStars(roundedRating);
  }

  return `${stars} ${roundedRating}`;
}

export default average;
