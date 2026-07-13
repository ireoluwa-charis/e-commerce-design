import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import ProductDetails from "./ProductDetails";
import laptop from "./assets/laptop.jpg";

const products = [
  { image: laptop, name: "Dell XPS 13", price: "$1,199" },
  { image: laptop, name: "Dell XPS 13", price: "$1,199" },
  { image: laptop, name: "Dell XPS 13", price: "$1,199" },
  { image: laptop, name: "Dell XPS 13", price: "$1,199" },
  { image: laptop, name: "Dell XPS 13", price: "$1,199" },
  { image: laptop, name: "Dell XPS 13", price: "$1,199" },
  { image: laptop, name: "Dell XPS 13", price: "$1,199" },
  { image: laptop, name: "Dell XPS 13", price: "$1,199" },
];

function Home() {
  return (
    <>
      <Navbar />
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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<ProductDetails />} />
    </Routes>
  );
}

export default App;