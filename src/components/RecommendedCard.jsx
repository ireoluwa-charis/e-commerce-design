import { Link } from "react-router-dom";

function RecommendedCard({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="recommended-card"
    >
      <img
        src={product.image}
        alt={product.title}
      />

      <h4>{product.title}</h4>

      <p>${product.price}</p>
    </Link>
  );
}

export default RecommendedCard;