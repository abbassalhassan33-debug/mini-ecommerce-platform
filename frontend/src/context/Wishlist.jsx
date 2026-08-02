import { createContext, useContext, useState } from "react";

const WhishList = createContext();

export function WhishListProvider({ children }) {
  const [whishlistItems, setWhishlistItems] = useState([]);

  const addToWishlist = (product) => {
    const exists = whishlistItems.find((item) => item.id === product.id);

    if (exists) {
      return;
    }

    setWhishlistItems((currentItems) => [...currentItems, product]);
  };

  const removeFromWhishlist = (id) => {
    setWhishlistItems((currentItems) =>
      currentItems.filter((item) => item.id !== id),
    );
  };

  return (
    <WhishList.Provider
      value={{
        whishlistItems,
        addToWishlist,
        removeFromWhishlist,
      }}
    >
      {children}
    </WhishList.Provider>
  );
}

export function useWishlist() {
  return useContext(WhishList);
}
