import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ReviewList from "../components/ReviewList";
import Rating from "../components/Rating";

import axios from "axios";

export default function MovieDetailPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState([]);

  const apiUrl = import.meta.env.VITE_MOVIE_URL;

  const fetchMovie = () => {
    axios
      .get(`${apiUrl}/${id}`)
      .then((res) => {
        setMovie(res.data);
        setReviews(res.data.reviews);
        console.log(res.data);
        console.log(res.data.reviews);
      })
      .catch((err) => {
        console.error("Error during API call:", err);
      });
  };

  useEffect(() => {
    fetchMovie();
  }, [id]);

  if (!movie) {
    return <p>Movie not found</p>;
  }

  const formattedTitle = movie.title.toLowerCase().replace(/ /g, "_");
  const imagePath = `/movies_cover/${formattedTitle}.jpg`;

  let totalVotes = 0;

  for (let i = 0; i < movie.reviews.length; i++) {
    totalVotes += reviews[i].vote;
  }

  const avRating = totalVotes / movie.reviews.length;

  return (
    <div className="container py-5">
      <div className="row ">
        <div className="col-3 col-md-3">
          <img
            src={imagePath}
            className="img-fluid card-img-top"
            alt={movie.title}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="col-9 col-md-9">
          <h2>{movie.title}</h2>
          <h4 className="text-muted fst-italic">{movie.director}</h4>
          <p className="py-2">{movie.abstract}</p>
        </div>
      </div>
      <hr className="mt-5" />
      <div className="row">
        <div className="col-9">
          <h3>Our comunity reviews</h3>
        </div>
        <div className="col-3 text-end">
          <Rating vote={avRating} />
        </div>
      </div>
      <ReviewList reviews={reviews} />
    </div>
  );
}
