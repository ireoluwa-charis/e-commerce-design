import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import ProductDetails from "./ProductDetails";
import laptop from "./assets/laptop.jpg";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <section className="products">
        <ProductCard image={laptop} name="Dell XPS 13" price="$1,199" />
        <ProductCard image={laptop} name="MacBook Air M4" price="$999" />
        <ProductCard image={laptop} name="HP Spectre x360" price="$1,149" />
        <ProductCard image={laptop} name="Lenovo ThinkPad X1 Carbon" price="$1,399" />
        <ProductCard image={laptop} name="ASUS ROG Zephyrus G16" price="$1,799" />
        <ProductCard image={laptop} name="Acer Swift Go 14" price="$849" />
        <ProductCard image={laptop} name="ASUS Zenbook 14" price="$999" />
        <ProductCard image={laptop} name="Lenovo Yoga 7i" price="$1,099" />
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