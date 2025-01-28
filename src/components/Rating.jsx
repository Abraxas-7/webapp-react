import { FaStar, FaRegStar } from "react-icons/fa";

export default function Rating({ vote }) {
  const fullStars = Math.round(vote / 2);
  const emptyStars = 5 - fullStars;

  return (
    <div>
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={`full-${i}`} style={{ color: "gold", fontSize: "20px" }} />
      ))}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar
          key={`empty-${i}`}
          style={{ color: "gold", fontSize: "20px" }}
        />
      ))}
    </div>
  );
}
