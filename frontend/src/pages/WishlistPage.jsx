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
    <div className="wishlist-page">
      <h1>My Wishlist ❤️</h1>

      {wishlistItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your wishlist is empty</p>
        </div>
      ) : (
        <div className="wishlist-grid">
          {wishlistItems.map((product) => (
            <div className="wishlist-card" key={product.id}>
              <img
                src={product.image}
                alt={product.title}
                className="wishlist-image"
              />

              <h2>{product.title}</h2>

              <p className="wishlist-price">${product.price}</p>

              <div className="wishlist-actions">
                <button onClick={() => moveToCart(product)}>
                  🛒 Move to Cart
                </button>

                <button
                  className="delete-button"
                  onClick={() => removeFromWishlist(product.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default WishlistPage;
