import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/products");

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <h1>Loading products...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <div>
      <h1>Products</h1>

      <div>
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt={product.title} width="200" />

            <h2>{product.title}</h2>

            <p>{product.description}</p>

            <p>${product.price}</p>

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
        ))}
      </div>
    </div>
  );
}

export default App;
