import {
  FavoriteBorderOutlined,
  LocalMallOutlined,
  PersonOutlineOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { Badge } from "@mui/material";
import React, { useContext } from "react";
import CartContext from "../../../store/cart-context";
import "./BtnLink.scss";
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../../../context/auth-context";

const BtnLink = () => {
  const { cart, setCartHandler } = useContext(CartContext);
  const { token, logout, login } = useContext(AuthContext);
  const navigate = useNavigate();

  const authHandler = () => {
    if (token) {
      logout();
      setCartHandler([]);
    } else {
      navigate("/auth/login");
    }
  };

  return (
    <div className="navlink">
      <SearchOutlined className="icon" />
      <FavoriteBorderOutlined className="icon" />
      <NavLink className="carticon" to="cart">
        <Badge badgeContent={cart.length} color="primary">
          <LocalMallOutlined className="icon" />
        </Badge>
      </NavLink>
      <PersonOutlineOutlined className="icon" />
      <span onClick={authHandler} className="auth-btn">
        {token ? "LogOut" : "LogIn"}
      </span>
    </div>
  );
};

export default BtnLink;
