import style from "./MainComponent.module.css";

export default function MainComponent() {
  return (
    <div
      className={`${style.myContainer} d-flex justify-content-center align-items-center`}
    >
      <h1>Main</h1>
    </div>
  );
}
