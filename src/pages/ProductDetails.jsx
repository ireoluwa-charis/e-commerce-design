import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../constants/api";
import RecommendedCard from "../components/RecommendedCard";

function ProductDetails({ addToCart }) {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [recommendedProducts, setRecommendedProducts] = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`${BASE_URL}/${id}`);

        if (!response.ok) {
          throw new Error("Failed to fetch product.");
        }

        const data = await response.json();
        setProduct(data);

        const allProductsResponse = await fetch(BASE_URL);

        if (!allProductsResponse.ok) {
          throw new Error("Failed to fetch recommended products.");
        }

        const allProducts = await allProductsResponse.json();

        const relatedProducts = allProducts.filter(
          (item) =>
            item.category === data.category &&
            item.id !== data.id
        );

        setRecommendedProducts(relatedProducts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <h2 style={{ textAlign: "center", color: "#111827", marginTop: "80px" }}>
        Loading...
      </h2>
    );
  }

  if (error) {
    return (
      <h2 style={{ textAlign: "center", color: "red", marginTop: "80px" }}>
        {error}
      </h2>
    );
  }

  if (!product) {
    return (
      <h2 style={{ textAlign: "center", color: "#111827", marginTop: "80px" }}>
        Product not found.
      </h2>
    );
  }

  return (
    <div className="details-container">
      <div className="details-card">
        <div className="details-image">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="details-info">
          <h1>{product.title}</h1>
          <h2>${product.price}</h2>
          <p>{product.description}</p>
          <button onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>

      <div className="recommended-section">
        <h2>You May Also Like</h2>

        <div className="recommended-products">
          {recommendedProducts.map((product) => (
            <RecommendedCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;