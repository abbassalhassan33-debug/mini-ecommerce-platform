import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { WhishListProvider } from "./context/Wishlist.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <WhishListProvider>
          <App />
        </WhishListProvider>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
);
