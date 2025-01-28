import style from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={style.loaderWrapper}>
      <div className={style.loader}></div>
    </div>
  );
}
