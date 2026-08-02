import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetailPage() {
  const { id } = useParams();

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

  return (
    <div>
      <h1>{product.title}</h1>

      <p>${product.price}</p>

      <p>{product.description}</p>

      <p>Stock: {product.stock}</p>

      {product.variants.length > 0 && (
        <div>
          <h3>Variants</h3>

          {product.variants.map((variant, index) => (
            <p key={index}>
              {variant.type}: {variant.value}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductDetailPage;
