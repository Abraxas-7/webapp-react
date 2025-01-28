import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import ReviewList from "../components/ReviewList";
import Rating from "../components/Rating";

import { useGlobalContext } from "../context/GlobalContext";
import style from "../components/MovieComponent.module.css";

import axios from "axios";

export default function MovieDetailPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [isError, setIsError] = useState(false);

  const { toggleLoader, isLoading } = useGlobalContext();

  const apiUrl = import.meta.env.VITE_MOVIE_URL;

  useEffect(() => {
    toggleLoader(true);

    axios
      .get(`${apiUrl}/${id}`)
      .then((res) => {
        if (res.data) {
          setMovie(res.data);
          setReviews(res.data.reviews);
        } else {
          setIsError(true);
        }
      })
      .catch((err) => {
        console.error("Error during API call:", err);
        setIsError(true);
      })
      .finally(() => {
        toggleLoader(false);
      });
  }, [id]);

  if (isError) {
    return (
      <div
        className={`${style.myContainer} container d-flex justify-content-center align-items-center p-5`}
      >
        <div>Movie not found</div>
      </div>
    );
  }

  if (!movie) {
    return null;
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
