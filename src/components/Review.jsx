export default function Review({ review }) {
  return (
    <div className="card p-3">
      <div className="pb-3">{review.text}</div>
      <div>
        <strong>Rating</strong>: {review.vote}
      </div>
      <div className="text-muted fst-italic">by {review.name}</div>
    </div>
  );
}
