import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // find if cartItems contains productToAdd
  if (cartItems.find((item) => item.id === productToAdd.id)) {
    // if found increment quantity and return the cartItems array
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  // if no such product exists in cartItems,   return new array with modified cartItems
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

/*
product
{
    id, name, price, imageUrl
}

cartItem
{
    id, name, price, imageUrl, quantity
}
*/
