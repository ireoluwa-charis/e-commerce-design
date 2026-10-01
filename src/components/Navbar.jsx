import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        StoreIzzy
      </Link>

      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Home
        </Link>

        <Link to="/cart" className="cart-link">
          <span>Cart</span>

          <span className="cart-badge">
            {cartCount > 99 ? "99+" : cartCount}
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

