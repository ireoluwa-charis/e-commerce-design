import { products } from "../assets/product_data";
import Hero from "../components/Hero";
//import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />

      <section className="products">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </section>
    </>
  );
}

export default Home;