import { Link } from "react-router-dom";

import style from "./HeaderComponent.module.css";

export default function HeaderComponent() {
  return (
    <div
      className={`${style["gradient-custom"]} text-white d-flex justify-content-center align-items-center shadow sticky-top`}
    >
      <Link to="/movies" className="text-white text-decoration-none">
        <h1>Movies</h1>
      </Link>
    </div>
  );
}
