function ReviewItem({ body, rating, image_url }) {
  return (
    <div>
      <p>{body}</p>
      <p>{rating}</p>
      <img src={image_url} alt="Review of location"></img>
    </div>
  );
}

export default ReviewItem;
