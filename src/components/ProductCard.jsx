import { Link } from "react-router-dom";

function ProductCard({ id, image, name, price }) {
  return (
    <Link to={`/product/${id}`} className="product-link">
      <div className="card">
        <img src={image} alt={name} />

        <h3>{name}</h3>

        <p className="price">{price}</p>

        <button>Buy Now</button>
      </div>
    </Link>
  );
}

export default ProductCard;