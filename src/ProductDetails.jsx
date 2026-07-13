import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import laptop from "./assets/laptop.jpg";

function ProductDetails() {
  return (
    <>
      <Navbar />

      <div className="details-container">
        <Link to="/" className="back-btn">
          ← Back to Products
        </Link>

        <div className="details-card">
          <img src={laptop} alt="Dell XPS 13" />

          <div className="details-info">
            <h1>Dell XPS 13</h1>

            <h2>$1,199</h2>

            <p>
              The Dell XPS 13 is a premium ultrabook designed for students,
              professionals, and everyday users. It offers excellent
              performance, a stunning display, and long battery life in a sleek,
              lightweight design.
            </p>

            <ul>
              <li>Intel Core Ultra Processor</li>
              <li>16GB RAM</li>
              <li>512GB SSD Storage</li>
              <li>13.4" Full HD+ Display</li>
              <li>Windows 11</li>
            </ul>

            <button>Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;