import { Link } from "react-router-dom";

export default function Card({ movie }) {
  const formattedTitle = movie.title.toLowerCase().replace(/ /g, "_");
  const imagePath = `/movies_cover/${formattedTitle}.jpg`;

  return (
    <div className="card d-flex flex-column h-100 shadow">
      <div>
        <img
          src={imagePath}
          className="img-fluid card-img-top"
          alt={movie.title}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="card-body d-flex flex-column">
        <h4 className="card-title">{movie.title}</h4>
        <h5 className="card-subtitle text-muted pb-2">{movie.director}</h5>
        <p className="card-text py-2">{movie.abstract}</p>
        <p className="card-text">
          <strong>Genre:</strong> {movie.genre}
        </p>
        <p className="card-text">
          <strong>Release Year:</strong> {movie.release_year}
        </p>
      </div>
      <div className="d-flex justify-content-end pb-3 pe-3">
        <Link to={`/movies/${movie.id}`} className="btn btn-primary">
          Dettagli
        </Link>
      </div>
    </div>
  );
}
