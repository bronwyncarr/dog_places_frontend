import ReviewNew from "./ReviewNew";

function Reviews({ children }) {
  return (
    // Style as you see fit...
    <>
      <h2>Reviews</h2>
      <ReviewNew />
      <div>{children}</div>
    </>
  );
}

export default Reviews;