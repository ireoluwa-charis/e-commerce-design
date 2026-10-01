import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>StoreIzzy</h2>

        <p>
          Your one-stop shop for quality products.
        </p>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
        </div>

        <p className="footer-copy">
          © 2026 StoreIzzy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;