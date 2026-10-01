import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import { BASE_URL } from "../constants/api";

function Home({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(BASE_URL);

        if (!response.ok) {
          throw new Error("Failed to fetch products.");
        }

        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "80px" }}>
        Loading products...
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

  return (
    <>
      <Hero />

      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </div>

      <section className="products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              id={product.id}
              image={product.image}
              name={product.title}
              price={product.price}
              addToCart={addToCart}
            />
          ))
        ) : (
          <h2 className="no-products">
            No products found.
          </h2>
        )}
      </section>
    </>
  );
}

export default Home;
