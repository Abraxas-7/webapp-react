import Review from "./Review";

export default function ReviewList({ reviews = [] }) {
  console.log(reviews);

  if (!reviews.length) {
    return <p>No reviews available</p>;
  }
  return (
    <div className="row">
      {reviews.map((review) => (
        <div key={review.id} className="col-12 py-3">
          <Review review={review} />
        </div>
      ))}
    </div>
  );
}
