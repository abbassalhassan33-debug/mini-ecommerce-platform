import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

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
            <span key={index}>{variant.value} </span>
          ))}
        </div>
      )}

      <button>View Details</button>

      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
