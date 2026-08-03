import { useCart } from "../context/CartContext";
import { Navigate, useNavigate } from "react-router-dom";

function CartPage() {
  const navigate = useNavigate();

  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    changeVariant,
  } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
        </div>
      ) : (
        <div className="cart-container">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <h2>{item.title}</h2>

              <p className="cart-price">Price: ${item.price}</p>

              {item.selectedVariants &&
                Object.entries(item.selectedVariants).map(([type, value]) => {
                  const variantValues = item.variants
                    .filter((variant) => variant.type === type)
                    .map((variant) => variant.value);

                  return (
                    <div className="variant-select" key={type}>
                      <label>{type}</label>

                      <select
                        value={value}
                        onChange={(event) =>
                          changeVariant(
                            item.id,
                            item.selectedVariants,
                            type,
                            event.target.value,
                          )
                        }
                      >
                        {variantValues.map((variantValue) => (
                          <option key={variantValue} value={variantValue}>
                            {variantValue}
                          </option>
                        ))}
                      </select>
                    </div>
                  );
                })}

              <div className="quantity-controls">
                <button
                  onClick={() =>
                    decreaseQuantity(item.id, item.selectedVariants)
                  }
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() =>
                    increaseQuantity(item.id, item.selectedVariants)
                  }
                >
                  +
                </button>
              </div>

              <p className="subtotal">
                Subtotal: ${item.price * item.quantity}
              </p>

              <button
                className="delete-button"
                onClick={() => removeFromCart(item.id, item.selectedVariants)}
              >
                Delete
              </button>
            </div>
          ))}

          <div className="cart-total">
            <h2>Total: ${total}</h2>

            <button
              className="checkout-button"
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
