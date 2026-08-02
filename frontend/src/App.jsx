import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import { Link } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage";
import ProtectedRoute from "./components/ProtectedRoute";
import ProductDetailPage from "./pages/ProductDetailPage";
import WishlistPage from "./pages/WishlistPage";

function App() {
  return (
    <>
      <nav>
        <Link to="/products">Products</Link>
        {" | "}
        <Link to="/cart">Cart</Link>
        {" | "}
        <Link to="/wishlist">Wishlist ❤️</Link>
      </nav>

      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <ProductListPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/products/:id"
          element={
            <ProtectedRoute>
              <ProductDetailPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/wishlist"
          element={
            <ProtectedRoute>
              <WishlistPage />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </>
  );
}
export default App;
