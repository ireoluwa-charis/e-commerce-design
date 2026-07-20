import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <h1>TechNest</h1>

      <ul>
        <li>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/cart"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            Cart ({cartCount})
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;