import ReviewNew from "./ReviewNew";

function Reviews({ children }) {
  return (
    <>
      <h2>Reviews</h2>
      <h3>Tell us what you think....</h3>
      <ReviewNew />
      <div>{children}</div>
    </>
  );
}

export default Reviews;
