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
    <div>
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <h2>{item.title}</h2>

              <p>Price: ${item.price}</p>

              {item.selectedVariants &&
                Object.entries(item.selectedVariants).map(([type, value]) => {
                  const variantValues = item.variants
                    .filter((variant) => variant.type === type)
                    .map((variant) => variant.value);

                  return (
                    <div key={type}>
                      <label>{type}: </label>

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

              <div>
                <button
                  onClick={() =>
                    decreaseQuantity(item.id, item.selectedVariants)
                  }
                >
                  -
                </button>

                <span> {item.quantity} </span>

                <button
                  onClick={() =>
                    increaseQuantity(item.id, item.selectedVariants)
                  }
                >
                  +
                </button>
              </div>

              <p>Subtotal: ${item.price * item.quantity}</p>

              <button
                onClick={() => removeFromCart(item.id, item.selectedVariants)}
              >
                Delete
              </button>

              <hr />
            </div>
          ))}

          <h2>Total: ${total}</h2>

          <button onClick={() => navigate("/checkout")}>
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default CartPage;
