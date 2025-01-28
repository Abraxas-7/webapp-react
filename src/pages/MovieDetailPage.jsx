import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ReviewList from "../components/ReviewList";

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

  return (
    <div className="container py-5">
      <div className="row ">
        <div className="col-2">
          <img
            src={imagePath}
            className="img-fluid card-img-top"
            alt={movie.title}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="col-10">
          <h2>{movie.title}</h2>
          <h3 className="text-muted">{movie.director}</h3>
          <p>{movie.abstract}</p>
        </div>
      </div>
      <hr className="mt-5" />
      <div className="row">
        <div className="col-10">
          <h3>Our comunity reviews</h3>
        </div>
        <div className="col-2">Av Rating</div>
      </div>
      <ReviewList reviews={reviews} />
    </div>
  );
}
