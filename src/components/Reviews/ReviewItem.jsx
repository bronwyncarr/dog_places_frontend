import makeStars from "../../utils/makeStars";

function ReviewItem({ body, rating, image_url, user }) {
  return (
    <div>
      {image_url && <img src={image_url} alt="Review of location"></img>}
      <p>{body}</p>
      <p>
        {makeStars(rating)} - {rating}/5
      </p>
      <p>Created by: {user}</p>
    </div>
  );
}

export default ReviewItem;
