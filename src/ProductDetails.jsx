import { Link } from "react-router-dom";
import laptop from "./assets/laptop.jpg";

function ProductDetails() {
  return (
    <div className="details-container">
      <Link to="/" className="back-btn">
        ← Back to Products
      </Link>

      <div className="details-card">
        <img src={laptop} alt="Laptop" />

        <div className="details-info">
          <h1>Dell XPS 13</h1>

          <h2>$1,199</h2>

          <p>
            Experience premium performance with the Dell XPS 13. Built for
            students, professionals, and everyday users, it features a sleek
            design, vibrant display, fast processor, and long-lasting battery
            life.
          </p>

          <h3>Specifications</h3>

          <ul>
            <li>Intel Core i7 Processor</li>
            <li>16GB RAM</li>
            <li>512GB SSD</li>
            <li>13.4" Full HD Display</li>
            <li>Windows 11</li>
          </ul>

          <button>Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;