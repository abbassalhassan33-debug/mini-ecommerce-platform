import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [selectedVariants, setSelectedVariants] = useState({});

  const variantGroups = product.variants.reduce((groups, variant) => {
    if (!groups[variant.type]) {
      groups[variant.type] = [];
    }
    groups[variant.type].push(variant.value);
    return groups;
  }, {});

  const handleAddToCart = () => {
    addToCart({
      ...product,
      selectedVariants,
    });
  };

  return (
    <div>
      <img src={product.image} alt={product.title} width="200" />

      <h2>{product.title}</h2>

      <p>${product.price}</p>

      <p>stock: {product.stock}</p>

      {product.variants && product.variants.length > 0 && (
        <div>
          <h3>Variants</h3>

          {product.variants.map((variant, index) => (
            <button
              key={index}
              onClick={() =>
                setSelectedVariants((currentVariants) => ({
                  ...currentVariants,
                  [variant.type]: variant.value,
                }))
              }
              style={{
                fontWeight:
                  selectedVariants[variant.type] === variant.value
                    ? "bold"
                    : "normal",
              }}
            >
              {variant.value}
            </button>
          ))}
        </div>
      )}

      <button>View Details</button>

      <button
        onClick={() =>
          addToCart({
            ...product,
            selectedVariants,
          })
        }
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
