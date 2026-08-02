import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

function WishlistPage() {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const moveToCart = (product) => {
    addToCart({
      ...product,
      selectedVariants: product.selectedVariants || {},
    });

    removeFromWishlist(product.id);
  };
  return (
    <div>
      <h1>My Wishlist ❤️</h1>

      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty</p>
      ) : (
        wishlistItems.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "15px",
            }}
          >
            <img src={product.image} alt={product.title} width="150" />

            <h2>{product.title}</h2>

            <p>${product.price}</p>

            <button onClick={() => moveToCart(product)}>🛒 Move to Cart</button>

            <button onClick={() => removeFromWishlist(product.id)}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default WishlistPage;
