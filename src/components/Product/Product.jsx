import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import "./Product.scss";

const Product = ({ props }) => {
  const ctx = useContext(CartContext);

  return (
    <div className="product">
      <img src={props.image} alt="" />
      <div onClick={() => ctx.addToCart(props)} className="add">
        Add to Cart
      </div>
    </div>
  );
};

export default Product;
