import style from "./FooterComponent.module.css";

export default function FooterComponent() {
  return (
    <div
      className={`${style["gradient-custom"]} text-white d-flex justify-content-center align-items-center`}
    >
      <div>All rights reserved to Abraxas</div>
    </div>
  );
}
