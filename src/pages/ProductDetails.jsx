import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ProductDetails({ addToCart }) {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${id}`
        );

        const data = await response.json();

        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <h2 style={{ textAlign: "center", color: "black" }}>
        Loading...
      </h2>
    );
  }

  return (
    <div className="details-container">
      <Link to="/" className="back-btn">
         Back to Products
      </Link>

      <div className="details-card">
        <img src={product.image} alt={product.title} />

        <div className="details-info">
          <h1>{product.title}</h1>

          <h2>${product.price}</h2>

          <p>{product.description}</p>

          <ul>
            <li>Category: {product.category}</li>
            <li>Rating: {product.rating.rate}</li>
            <li>Reviews: {product.rating.count}</li>
          </ul>

          <button onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;