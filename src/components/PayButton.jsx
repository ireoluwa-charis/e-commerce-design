import { PaystackButton } from "react-paystack";

function PayButton({ total, clearCart }) {
  const config = {
    reference: new Date().getTime().toString(),
    email: "charis@example.com",
    amount: total * 100 * 1000,
    publicKey:
      "pk_test_6c57a5487a7c86ea816a7e4e4cef29e8b70e8f44",
  };

  const handleSuccess = (reference) => {
    console.log("PAYMENT SUCCESS:", reference);
    console.log("CLEAR CART FUNCTION:", clearCart);

    alert("Payment Successful!");

    if (clearCart) {
      clearCart();
    }
  };

  const handleClose = () => {
    console.log("Payment closed");
    alert("Payment Cancelled");
  };

  return (
    <PaystackButton
      {...config}
      text="Pay with Paystack"
      onSuccess={handleSuccess}
      onClose={handleClose}
    />
  );
}

export default PayButton;