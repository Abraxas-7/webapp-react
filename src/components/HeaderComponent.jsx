import style from "./HeaderComponent.module.css";

export default function HeaderComponent() {
  return (
    <div
      className={`${style["gradient-custom"]} text-white d-flex justify-content-center align-items-center`}
    >
      <h1>Movies</h1>
    </div>
  );
}
