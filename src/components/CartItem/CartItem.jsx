import {
  Add,
  ArrowDropDown,
  DeleteOutlineOutlined,
  ExpandMore,
  Remove,
} from "@mui/icons-material";
import React, { useContext } from "react";
import "./CartItem.scss";

const CartItem = ({ prop }) => {
  console.log(prop);
  return (
    <div className="cartItem">
      <div className="left">
        <img src={prop.image} alt="" />
      </div>
      <div className="right">
        <div className="size">
          <span>
            {prop.size} <ExpandMore className="icon" />
          </span>
        </div>
        <div className="quantity">
          <Add className="icon" />
          {prop.quantity}
          <Remove className="icon" />
        </div>
        <div className="totalPrice">
          <span>Rs {prop.price}</span>
        </div>
        <div className="remove">
          <span>
            <DeleteOutlineOutlined className="icon" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
