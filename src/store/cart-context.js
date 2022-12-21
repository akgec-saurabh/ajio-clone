import { ElevatorSharp } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
const CartContext = React.createContext({
  cart: [],
  userId: "",
  addToCart: (prop) => {},
  removeFromCart: (prop) => {},
  deleteItem: (prop) => {},
  setCartHandler: (prop) => {},
});

export const CartContextProvider = (prop) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart"))
      ? JSON.parse(localStorage.getItem("cart"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  console.log(cart);

  const setCartHandler = (prop) => {
    setCart(prop);
  };

  const removeFromCart = (prop) => {
    if (prop.quantity === 1) {
      deleteItem(prop);
    } else {
      setCart((prvCart) => {
        const existingProduct = prvCart.find((p) => p.id === prop.id);
        if (existingProduct) {
          const index = prvCart.findIndex((p) => p.id === prop.id);

          const updatedProduct = {
            ...existingProduct,
            quantity: prvCart[index].quantity - 1,
          };

          const c = prvCart.filter((p) => p !== existingProduct);
          // c.push(updatedProduct);
          c.splice(index, 0, updatedProduct);

          console.log("updated", c[index].quantity);
          return [...c];
        } else {
          return [...prvCart, prop];
        }
      });
    }
  };

  const deleteItem = (prop) => {
    // const existingProduct = prvCart.find((p) => p.id === prop.id);
    let updatedCart = [...cart];
    updatedCart = updatedCart.filter((i) => i.id !== prop.id);
    setCart(updatedCart);
  };

  const addToCart = (prop) => {
    setCart((prvCart) => {
      const existingProduct = prvCart.find((p) => p.id === prop.id);
      if (existingProduct) {
        const index = prvCart.findIndex((p) => p.id === prop.id);

        const updatedProduct = {
          ...existingProduct,
          quantity: prvCart[index].quantity + 1,
        };

        console.log(updatedProduct.quantity);

        const c = prvCart.filter((p) => p !== existingProduct);
        // c.push(updatedProduct);
        c.splice(index, 0, updatedProduct);
        console.log("updated");
        return [...c];
      } else {
        return [...prvCart, prop];
      }
    });

    // console.log("Added To Cart", cart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        deleteItem,
        removeFromCart,
        setCartHandler,
      }}
    >
      {prop.children}
    </CartContext.Provider>
  );
};

export default CartContext;
