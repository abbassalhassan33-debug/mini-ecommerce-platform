import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductDetailPage() {
  const { id } = useParams();

  const { addToCart } = useCart();

  const [selectedVariants, setSelectedVariants] = useState({});
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:5000/products/${id}`);

        if (!response.ok) {
          throw new Error("Product not found");
        }

        const data = await response.json();

        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <h1>Loading product...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  const variantGroups = product.variants.reduce((groups, variant) => {
    if (!groups[variant.type]) {
      groups[variant.type] = [];
    }

    groups[variant.type].push(variant.value);

    return groups;
  }, {});

  return (
    <div>
      <h1>{product.title}</h1>

      <p>${product.price}</p>

      <p>{product.description}</p>

      <p>Stock: {product.stock}</p>

      {Object.entries(variantGroups).map(([type, values]) => (
        <div key={type}>
          <h3>{type}</h3>

          {values.map((value) => (
            <button
              key={value}
              onClick={() =>
                setSelectedVariants((currentVariants) => ({
                  ...currentVariants,
                  [type]: value,
                }))
              }
              style={{
                fontWeight:
                  selectedVariants[type] === value ? "bold" : "normal",
              }}
            >
              {value}
            </button>
          ))}
        </div>
      ))}

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

export default ProductDetailPage;
