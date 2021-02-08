import makeStars from "../../utils/makeStars";

function ReviewItem({ body, rating, image_url }) {
  return (
    <div>
      <p>{body}</p>
      <p>
        {makeStars(rating)} - {rating}/5
      </p>
      {image_url && <img src={image_url} alt="Review of location"></img>}
    </div>
  );
}

export default ReviewItem;
