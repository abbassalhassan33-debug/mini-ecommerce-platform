import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();
  const navigate = useNavigate();

  const [selectedVariants, setSelectedVariants] = useState({});

  const handleAddToCart = () => {
    addToCart({
      ...product,
      selectedVariants,
    });
  };

  const handleAddToWishlist = () => {
    addToWishlist(product);
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          className="product-image"
          src={product.image}
          alt={product.title}
        />
      </div>

      <div className="product-card-content">
        <h2 className="product-title">{product.title}</h2>

        <p className="product-price">${product.price}</p>

        <p className="product-stock">
          {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
        </p>

        {product.variants && product.variants.length > 0 && (
          <div className="product-variants">
            <h3>Variants</h3>

            <div className="variant-buttons">
              {product.variants.map((variant, index) => (
                <button
                  className={`variant-button ${
                    selectedVariants[variant.type] === variant.value
                      ? "variant-selected"
                      : ""
                  }`}
                  key={index}
                  onClick={() =>
                    setSelectedVariants((currentVariants) => ({
                      ...currentVariants,
                      [variant.type]: variant.value,
                    }))
                  }
                >
                  {variant.value}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="product-actions">
          <button
            className="secondary-button"
            onClick={() => navigate(`/products/${product.id}`)}
          >
            View Details
          </button>

          <button className="primary-button" onClick={handleAddToCart}>
            Add to Cart
          </button>

          <button className="wishlist-button" onClick={handleAddToWishlist}>
            ♡ Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
