import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) =>
          item.id === product.id &&
          JSON.stringify(item.selectedVariants || {}) ===
            JSON.stringify(product.selectedVariants || {}),
      );

      if (existingItem) {
        if (existingItem.quantity >= product.stock) {
          return currentItems;
        }

        return currentItems.map((item) =>
          item.id === existingItem.id &&
          JSON.stringify(item.selectedVariants || {}) ===
            JSON.stringify(existingItem.selectedVariants || {})
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        );
      }

      return [
        ...currentItems,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  const increaseQuantity = (productId, selectedVariants = {}) => {
    setCartItems((currentItems) =>
      currentItems.map((item) => {
        const sameProduct =
          item.id === productId &&
          JSON.stringify(item.selectedVariants || {}) ===
            JSON.stringify(selectedVariants);

        if (!sameProduct) {
          return item;
        }

        if (item.quantity >= item.stock) {
          return item;
        }

        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }),
    );
  };

  const decreaseQuantity = (productId, selectedVariants = {}) => {
    setCartItems((currentItems) =>
      currentItems
        .map((item) => {
          const sameProduct =
            item.id === productId &&
            JSON.stringify(item.selectedVariants || {}) ===
              JSON.stringify(selectedVariants);

          if (!sameProduct) {
            return item;
          }

          return {
            ...item,
            quantity: item.quantity - 1,
          };
        })
        .filter((item) => item.quantity > 0),
    );
  };

  const removeFromCart = (productId, selectedVariants = {}) => {
    setCartItems((currentItems) =>
      currentItems.filter(
        (item) =>
          !(
            item.id === productId &&
            JSON.stringify(item.selectedVariants || {}) ===
              JSON.stringify(selectedVariants)
          ),
      ),
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
