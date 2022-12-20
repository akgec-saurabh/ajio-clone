import { StarOutlineOutlined } from "@mui/icons-material";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../../store/cart-context";
import "./Product.scss";

const Product = ({ props, hide = false }) => {
  const ctx = useContext(CartContext);

  return (
    <NavLink to={`id`} className={`product ${hide ? "hide" : ""} `}>
      <div className="item">
        <img src={props.image} alt="" />
      </div>
      <div className="info">
        <div className="brand">{props.brand}</div>
        <div className="name">{props.name}</div>
        <div className="price">&#8377;{props.price}</div>
      </div>
      <div className="final-price">
        <StarOutlineOutlined className="icon" /> BBS Price &#8377;{props.price}
      </div>
    </NavLink>
  );
};

export default Product;
