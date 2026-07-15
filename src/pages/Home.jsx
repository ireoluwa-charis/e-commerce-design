import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";

function Home() {
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

  return (
    <>
      <Hero />

      <section className="products">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.title}
            price={`$${product.price}`}
          />
        ))}
      </section>
    </>
  );
}

export default Home;