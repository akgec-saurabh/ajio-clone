import {
  Add,
  ArrowDropDown,
  DeleteOutlineOutlined,
  ExpandMore,
  Remove,
} from "@mui/icons-material";
import React, { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import "./CartItem.scss";

const CartItem = ({ prop }) => {
  const { addToCart, deleteItem, removeFromCart } = useContext(CartContext);

  // console.log(prop);
  return (
    <div className="cartItem">
      <div className="left">
        <img src={prop.image} alt="" />
      </div>
      <div className="right">
        <div className="name">{prop.name}</div>
        <div className="size">
          <span>
            {prop.size} <ExpandMore className="icon" />
          </span>
        </div>
        <div className="quantity">
          <Add className="icon" onClick={() => addToCart(prop)} />
          {prop.quantity}
          <Remove className="icon" onClick={() => removeFromCart(prop)} />
        </div>
        <div className="totalPrice">
          <span>&#8377; {prop.price * prop.quantity}</span>
        </div>
        <div className="remove">
          <span>
            <DeleteOutlineOutlined
              onClick={() => deleteItem(prop)}
              className="icon"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
