import React, { useContext } from "react";
import CartItem from "../../components/CartItem/CartItem";
import "./Cart.scss";
import CartContext from "../../store/cart-context";
import empty from "../../assets/empty.svg";
import { LocalMallOutlined } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import AuthContext from "../../context/auth-context";

const Cart = () => {
  const { cart } = useContext(CartContext);

  // console.log(cart);
  let cartDiv;
  if (cart.length === 0) {
    cartDiv = (
      <>
        <div className="empty">Your Cart is Empty</div>
        <div className="empty_image">
          <img src={empty} alt="" />
        </div>
      </>
    );
  } else {
    cartDiv = (
      <div className="heading">
        <div className="left">Products</div>
        <div className="right">
          <span>Name</span>
          <span>Size</span>
          <span>Quantity</span>
          <span>Total Price</span>
          <span>Remove</span>
        </div>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2 className="heading-cart">Your Cart</h2>
      {cartDiv}

      {cart.map((item) => (
        <CartItem key={item.id} prop={item} />
      ))}

      {!(cart.length === 0) && (
        <NavLink to="/checkout">
          <h3 className="heading-checkout">
            <LocalMallOutlined className="icon" /> Go to CheckOut Page
          </h3>
        </NavLink>
      )}
    </div>
  );
};

export default Cart;
