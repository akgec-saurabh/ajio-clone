import React, { useState } from "react";
const CartContext = React.createContext({
  cart: [],
  userId: "",
  addToCart: (prop) => {},
});

export const CartContextProvider = (prop) => {
  const [cart, setCart] = useState([]);

  const addToCart = (prop) => {
    setCart((prvCart) => {
      const existingProduct = prvCart.find((p) => p.id === prop.id);
      if (existingProduct) {
        const index = prvCart.findIndex((p) => p.id === prop.id);

        const updatedProduct = {
          ...existingProduct,
          quantity: prvCart[index].quantity + 1,
        };

        const c = prvCart.filter((p) => p !== existingProduct);
        c.push(updatedProduct);
        console.log("updated", c[index].quantity);
        return [...c];
      } else {
        return [...prvCart, prop];
      }
    });
    console.log("Added To Cart", cart);
  };

  const userId = "xyz";

  return (
    <CartContext.Provider
      value={{
        cart,
        userId,
        addToCart,
      }}
    >
      {prop.children}
    </CartContext.Provider>
  );
};

export default CartContext;
