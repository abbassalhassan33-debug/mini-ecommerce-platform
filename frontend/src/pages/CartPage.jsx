import { useCart } from "../context/CartContext";

function CartPage() {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();

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
                Object.entries(item.selectedVariants).map(([type, value]) => (
                  <p key={type}>
                    {type}: {value}
                  </p>
                ))}

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
        </div>
      )}
    </div>
  );
}

export default CartPage;
