import { Link } from "react-router-dom";

function ProductCard({
  product,
  id,
  image,
  name,
  price,
  addToCart,
}) {
  return (
    <div className="card">
      <Link to={`/product/${id}`} className="product-link">
        <img src={image} alt={name} />

        <h3>{name}</h3>

        <p className="price">${price}</p>
      </Link>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;