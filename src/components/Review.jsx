import Rating from "./Rating";
export default function Review({ review }) {
  return (
    <div className="card p-3">
      <div className="row">
        <div className="pb-3 col-12">{review.text}</div>
        <div className="col-10">
          <Rating vote={review.vote} />
        </div>
        <div className="text-muted fst-italic col-2 text-end">
          by {review.name}
        </div>
      </div>
    </div>
  );
}
