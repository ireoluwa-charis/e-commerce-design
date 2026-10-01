import { Link } from "react-router-dom";
import PayButton from "../components/PayButton";

function Cart({
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  clearCart,
}) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="details-container">
      <h1 style={{ color: "#111827" }}>Shopping Cart</h1>

      <Link to="/" className="back-btn">
        Continue Shopping
      </Link>

      {cart.length === 0 ? (
        <h2 className="empty-cart">Your cart is empty.</h2>
      ) : (
        <>
          {cart.map((item) => (
            <div className="details-card" key={item.id}>
              <img src={item.image} alt={item.title} />

              <div className="details-info">
                <h2>{item.title}</h2>

                <h3>${item.price}</h3>

                <p>
                  <strong>Quantity:</strong> {item.quantity}
                </p>

                <div className="cart-buttons">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    -
                  </button>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>

                  <button
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="cart-total">
            <h2>Total: ${total.toFixed(2)}</h2>

            <PayButton
              total={total}
              clearCart={clearCart}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;