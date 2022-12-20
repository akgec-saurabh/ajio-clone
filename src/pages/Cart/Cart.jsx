import React, { useContext } from "react";
import CartItem from "../../components/CartItem/CartItem";
import "./Cart.scss";
import CartContext from "../../store/cart-context";

const Cart = () => {
  const { cart } = useContext(CartContext);
  console.log(cart);

  return (
    <div className="cart">
      <h2>CheckOut Page</h2>
      <div className="heading">
        <div className="left">Products</div>
        <div className="right">
          <span>Size</span>
          <span>Quantity</span>
          <span>Total Price</span>
          <span>Remove</span>
        </div>
      </div>
      {cart.map((item) => (
        <CartItem key={item.id} prop={item} />
      ))}
      {/* <CartItem /> */}
    </div>
  );
};

export default Cart;
