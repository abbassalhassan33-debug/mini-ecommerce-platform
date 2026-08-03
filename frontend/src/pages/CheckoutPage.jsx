import { useCart } from "../context/CartContext";
import { useActionData, useNavigate } from "react-router-dom";

function CheckoutPage() {
  const { cartItems, clearCart } = useCart();

  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    clearCart();

    navigate("/order-confirmation");
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div>
      <h1>Checkout</h1>

      {cartItems.length === 0 ? (
        <p>Your Cart is empty</p>
      ) : (
        <>
          <h2>Order Summary</h2>

          {cartItems.map((item, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                marginBottom: "10px",
                padding: "10px",
              }}
            >
              <h3>{item.title}</h3>

              <p>Price: ${item.price}</p>

              <p>Subtotal: ${item.price * item.quantity}</p>
            </div>
          ))}

          <h2>Total: ${total}</h2>

          <button onClick={handlePlaceOrder}>Place Order</button>
        </>
      )}
    </div>
  );
}

export default CheckoutPage;
