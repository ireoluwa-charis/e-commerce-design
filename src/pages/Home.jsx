import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";

function Home({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();

        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchProducts();
  }, []);

  if (products.length === 0) {
    return (
      <>
        <Hero />
        <h2 style={{ textAlign: "center", color: "black" }}>
          Loading Products...
        </h2>
      </>
    );
  }

  return (
    <>
      <Hero />

      <section className="products">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            id={product.id}
            image={product.image}
            name={product.title}
            price={product.price}
            addToCart={addToCart}
          />
        ))}
      </section>
    </>
  );
}

export default Home;