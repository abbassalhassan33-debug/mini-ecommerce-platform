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
    <div className="checkout-page">
      <h1>Checkout</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
        </div>
      ) : (
        <div className="checkout-container">
          <div className="order-summary">
            <h2>Order Summary</h2>

            {cartItems.map((item) => (
              <div className="checkout-item" key={item.id}>
                <h3>{item.title}</h3>

                <p>Price: ${item.price}</p>

                <p>Subtotal: ${item.price * item.quantity}</p>
              </div>
            ))}
          </div>

          <div className="checkout-total">
            <h2>Total: ${total}</h2>

            <button className="place-order-button" onClick={handlePlaceOrder}>
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CheckoutPage;
