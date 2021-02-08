function makeStars(num) {
  let roundedNum = Math.floor(num);
  let stars = Array(roundedNum).fill("⭐").join("");
  return stars;
}

export default makeStars;
