import style from "./MovieComponent.module.css";

import { useGlobalContext } from "../context/GlobalContext";

import Card from "./Card";

export default function MovieComponent() {
  const { movies } = useGlobalContext();

  return (
    <div
      className={`${style.myContainer} container d-flex justify-content-center align-items-center p-5`}
    >
      <div className="row d-flex justify-content-center">
        {movies.map((movie) => (
          <div key={movie.id} className="col-lg-4 col-md-6 g-5 ">
            <Card movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}
