import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductDetails from "./pages/ProductDetails";
import Home from "./pages/Home";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
    </>
  );
}

export default App;