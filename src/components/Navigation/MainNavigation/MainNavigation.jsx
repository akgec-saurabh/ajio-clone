import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../../../store/cart-context";
import "./MainNavigation.scss";
import NavLink from "../NavLinks/NavLink";
const MainNavigation = () => {
  const ctx = useContext(CartContext);
  const navigate = useNavigate();

  const goToHomeHandler = () => {
    navigate("/");
  };

  console.log(ctx.cart);
  return (
    <header className="mainNavigation">
      <div onClick={goToHomeHandler} className="logo">
        AJIO
      </div>
      <div className="data">
        <NavLink />
      </div>
    </header>
  );
};

export default MainNavigation;
